import { getProducts } from "../data";
import type { ProductRepositoryDiferentAllTypes } from "../data/repository/contracts";

export async function GetProductsUseCase(): Promise<ProductRepositoryDiferentAllTypes> {
  return await getProducts();
}
