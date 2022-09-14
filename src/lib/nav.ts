export function href(abs: string): string {
  return import.meta.env.BASE_URL + abs.replace("/", "");
}
