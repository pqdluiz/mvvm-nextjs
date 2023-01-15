import { getAll } from "./get-all-product";

const COLLECTION = "PRODUCTS";

export async function deleteOne(id: string) {
  let { result } = await getAll();
  let data = result;
  let deleteIndex = data?.indexOf((item: ProductTypes) => item.id === id);

  data?.splice(Number(deleteIndex), 1);
  window.localStorage.setItem(COLLECTION, JSON.stringify(data));

  return Promise.resolve({ error: null, result: true });
}
