/** Calls the API and answers its JSON. A failed call throws, so a page shows one error path. */
export async function getJson<T>(path: string): Promise<T> {
  const response = await fetch(path, { headers: { Accept: 'application/json' } });
  if (!response.ok) {
    throw new Error(`${path} answered ${response.status}`);
  }
  return (await response.json()) as T;
}
