import { deleteProduct } from "../data";
import type { ProductRepositoryTypes } from "../data/repository/contracts";

export async function DeleteProductUseCase(id: string): Promise<ProductRepositoryTypes> {
  return await deleteProduct(id);
}
