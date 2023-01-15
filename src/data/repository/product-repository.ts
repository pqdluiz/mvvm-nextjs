import { create, deleteOne, getAll, getOne, update } from "../datasource";

interface ProductTypes {
  id: string;
  name: string;
  price: string;
}

interface ProductRepositoryTypes {
  error: null,
  result: boolean
}

interface ProductRepositoryDiferentTypes {
  error: null,
  result: ProductTypes | null
}

interface ProductRepositoryDiferentAllTypes {
  error: null,
  result: ProductTypes[] | null
}

export async function createProduct(data: ProductTypes): Promise<ProductRepositoryTypes> {
  const { result, error } = await create(data);
  return { result, error };
}

export async function deleteProduct(id: string): Promise<ProductRepositoryTypes> {
  const { result, error } = await deleteOne(id);
  return { result, error };
}

export async function updateProduct(id: string, data: ProductTypes): Promise<ProductRepositoryTypes> {
  const { result, error } = await update(id, data);
  return { result, error };
}

export async function getProducts(): Promise<ProductRepositoryDiferentAllTypes> {
  const { result, error } = await getAll();
  return { result, error };
}

export async function getProduct(id: string): Promise<ProductRepositoryDiferentTypes> {
  const { result, error } = await getOne(id);
  return { result, error };
}
