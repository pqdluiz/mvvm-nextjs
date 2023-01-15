import { useState } from "react";

import { GetProductsUseCase } from "../../../../domain";

interface ProductTypes {
  id: string;
  name: string;
  price: string;
}

interface ProducDetailViewModelProps {
  error: string | null;
  getProducts: () => Promise<void>;
  products: ProductTypes[] | null;
}

export function useProductList(): ProducDetailViewModelProps {
  const [error, setError] = useState<string | null>("");
  const [products, setProducts] = useState<ProductTypes[] | null>([]);

  const getProducts = async (): Promise<void> => {
    const { result, error } = await GetProductsUseCase();

    setError((prevState) => (prevState = error));
    setProducts((prevState) => (prevState = result));
  };

  return {
    error,
    getProducts,
    products,
  };
}
