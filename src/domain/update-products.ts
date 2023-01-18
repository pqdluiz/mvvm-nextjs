import { ProductTypes, updateProduct } from "../data";
import type { ProductRepositoryTypes } from "../data/repository/contracts";

export async function UpdateProductUseCase(id: string, productData: ProductTypes): Promise<ProductRepositoryTypes> {
  return await updateProduct(id, productData);
}
