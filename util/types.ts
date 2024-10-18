export type UseStateReturnType<T> = T extends {
  (initialState: any): infer Ret;
  (...args: any[]): any;
}
  ? Ret
  : never;
