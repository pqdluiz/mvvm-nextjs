import { getProducts } from "../data";

export async function GetProductsUseCase() {
  return await getProducts();
}
