import { createProduct } from "../data";
import { ProductTypes } from "../data/datasource/contracts";

export async function CreateProductUseCase(productData: ProductTypes): Promise<ProductRepositoryTypes> {
  return await createProduct(productData);
}
