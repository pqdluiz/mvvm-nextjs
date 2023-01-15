import { updateProduct } from "../data";

export async function UpdateProductUseCase(id: string, productData: any) {
  return await updateProduct(id, productData);
}
