import { deleteProduct } from "../data";

export async function DeleteProductUseCase(id: string) {
  return await deleteProduct(id);
}
