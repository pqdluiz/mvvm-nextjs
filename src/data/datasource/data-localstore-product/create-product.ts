import { getAll } from "./get-all-product";

interface ProductTypes {
  id: string;
  name: string;
  price: string;
}

interface ProductCreateTypes {
  error: null;
  result: boolean
}

const COLLECTION = "PRODUCTS";

export async function create(productData: ProductTypes): Promise<ProductCreateTypes> {
  let { result } = await getAll();
  let data = result;

  productData.id = new Date().getTime().toString();
  data?.push(productData);

  window.localStorage.setItem(COLLECTION, JSON.stringify(data));

  return Promise.resolve({ error: null, result: true });
}
