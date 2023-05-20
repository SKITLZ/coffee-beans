export const get = async <T>(url: string): Promise<T> => {
  const respone = await fetch(url);
  const result = respone.json();
  return result;
};
