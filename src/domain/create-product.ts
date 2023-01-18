import { createProduct } from "../data";
import type { ProductTypes } from "../data/datasource/contracts";
import type { ProductRepositoryTypes } from "../data/repository/contracts";

export async function CreateProductUseCase(productData: ProductTypes): Promise<ProductRepositoryTypes> {
  return await createProduct(productData);
}
