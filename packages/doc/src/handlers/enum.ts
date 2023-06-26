import {IntegrationHandler} from "../index";
import traverse, { NodePath } from "@babel/traverse";
import * as t from "@babel/types";
import {EntityDbMetadata, EnumField} from "joist-codegen";
import * as path from "path";
import {newComment} from "../utils";
import {PgEnumField} from "joist-codegen/build/EntityDbMetadata";


/**
 * Handles the user-land *.ts entity files.
 *
 * Integrates docs within
 * - Field setters & getters
 * - Field properties on the Opts interface
 */
export const enumIntegration: IntegrationHandler<{ name: string }> = {
    file: (enumField, config) => path.join(config.entitiesDirectory, `${enumField.name}.ts`),
    commentStoreHash: (enumField, commentStore) => commentStore.hashForEnum(enumField),
    async handle(source, enumField, commentStore) {
        let enumDef = undefined as NodePath<t.TSEnumDeclaration> | undefined;

        traverse(source, {
            TSEnumDeclaration(path) {
                if (path.node.id.name === `${enumField.name}`) {
                    enumDef = path as NodePath<t.TSEnumDeclaration>;
                }
            },
        });

        // handle the class
        if (enumDef) {
            const rootComment = await commentStore.forEnum(enumField, true);
            if (rootComment) {
                enumDef.parent.leadingComments = [newComment(rootComment)];
            }

            for (const member of enumDef.node.members) {
                if (t.isTSEnumMember(member) && t.isIdentifier(member.id)) {
                    const comment = await commentStore.forEnumMember(enumField, member.id.name, true);

                    if (comment) {
                        member.leadingComments = [newComment(comment)];
                    }
                }
            }
        }

        return source;
    }
}