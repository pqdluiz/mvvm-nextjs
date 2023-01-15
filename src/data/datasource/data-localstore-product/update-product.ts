import { getAll } from "./get-all-product";

interface ProductTypes {
  id: string;
  name: string;
  price: string;
}
interface ProductUpdateTypes {
  error: null;
  result: boolean
}

const COLLECTION = "PRODUCTS";

export async function update(
  id: string,
  productData: ProductTypes
): Promise<ProductUpdateTypes> {
  let { result } = await getAll();
  let data = result;

  data?.forEach((item) => {
    if (item.id === id) {
      item.name = productData.name;
      item.price = productData.price;
    }
  });

  window.localStorage.setItem(COLLECTION, JSON.stringify(data));
  return Promise.resolve({ error: null, result: true });
}
