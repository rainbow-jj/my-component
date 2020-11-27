// 类型小工具
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export const tuple = <T extends string[]>(...agrs: T) => agrs;

export const tupleNum = <T extends number[]>(...agrs: T) => agrs;

export type ElementOf<T> = T extends (infer E)[] ? E : T extends readonly (infer F)[] ? F : never;

export type LiteralUnion<T extends U, U> = T | (U & {});

