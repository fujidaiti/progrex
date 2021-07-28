export function nonnull<T>(value: T | null): NonNullable<T> {
  // eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
  return value!
}
