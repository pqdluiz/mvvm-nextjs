import { getProduct } from "../data";

export async function GetProductUseCase(id: string) {
  return await getProduct(id);
}
