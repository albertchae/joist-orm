import { Entity } from "../Entity";
import { currentlyInstantiatingEntity } from "../EntityManager";
import { LoadHint, Loaded, isLoaded } from "../loadHints";

const M = Symbol();

export interface AsyncMethod<T extends Entity, A extends unknown[], V> {
  isLoaded: boolean;
  load(...args: A): Promise<V>;
  [M]?: T;
}

export interface LoadedMethod<T extends Entity, A extends unknown[], V> {
  get(...args: A): V;
}

export function hasAsyncMethod<T extends Entity, const H extends LoadHint<T>, A extends unknown[], V>(
  loadHint: H,
  fn: (entity: Loaded<T, H>, ...args: A) => V,
): AsyncMethod<T, A, V> {
  const entity = currentlyInstantiatingEntity as T;
  return new AsyncMethodImpl(entity, loadHint, fn);
}

export class AsyncMethodImpl<T extends Entity, H extends LoadHint<T>, A extends unknown[], V>
  implements AsyncMethod<T, A, V>
{
  private loaded = false;
  private loadPromise: any;

  readonly #entity: T;
  readonly #hint: H;
  constructor(
    entity: T,
    hint: H,
    private fn: (entity: Loaded<T, H>, ...args: A) => V,
  ) {
    this.#entity = entity;
    this.#hint = hint;
  }

  /** Args might be either the user-provided args, or the populate `opts` if we're being preloaded. */
  load(...args: A): Promise<V> {
    // Are we being called by `em.populate`? If so, we don't have the real args, so avoid invoking fn
    const isPopulate = args && typeof args[0] === "object" && "populate" in (args as any)[0];
    const { fn } = this;
    if (!this.loaded) {
      return (this.loadPromise ??= this.#entity.em.populate(this.#entity, this.#hint!).then((loaded) => {
        this.loaded = true;
        return isPopulate ? undefined : fn(loaded, ...args);
      }));
    }
    return Promise.resolve(isPopulate ? (undefined as any) : this.get(...args));
  }

  get(...args: A): V {
    if (!this.isLoaded) {
      throw new Error("hasAsyncMethod.get was called but not loaded");
    }
    return this.fn(this.#entity as Loaded<T, H>, ...args);
  }

  get isLoaded() {
    return this.loaded || isLoaded(this.#entity, this.#hint);
  }
}