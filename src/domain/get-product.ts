import { getProduct } from "../data";
import type { ProductRepositoryDiferentTypes } from "../data/repository/contracts";

export async function GetProductUseCase(id: string): Promise<ProductRepositoryDiferentTypes> {
  return await getProduct(id);
}
