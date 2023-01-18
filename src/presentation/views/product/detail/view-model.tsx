import { useState } from "react";

import { ProductTypes } from "../../../../data/datasource/contracts";
import {
  DeleteProductUseCase,
  GetProductUseCase,
  UpdateProductUseCase
} from "../../../../domain";

interface ProducDetailViewModelProps {
  id: string;
  name: string;
  price: string;
  error: string | null;
  deleteProduct: (id: string) => Promise<void>;
  updateProduct: (id: string) => Promise<void>;
  getProduct: (id: string) => Promise<void>;
  onChange: (value: string, prop: string) => void;
}

export function useProductDetail(): ProducDetailViewModelProps {
  const [error, setError] = useState<string | null>("");
  const [values, setValues] = useState<ProductTypes>({
    id: "",
    name: "",
    price: "",
  });

  async function getProduct(id: string): Promise<void> {
    const { result, error } = await GetProductUseCase(id);

    setError((prevState) => (prevState = error));
    setValues(
      (prevState) =>
        (prevState = {
          ...result,
          id: result?.id,
          name: result?.name,
          price: result?.price,
        }),
    );
  }

  function onChange(value: string, prop: any): void {
    setValues((prevState) => (prevState = { ...values, [prop]: value }));
    console.log(value, prop);
  }

  async function updateProduct(id: string): Promise<void> {
    const { result, error } = await UpdateProductUseCase(id, values);
    setError((prevState) => (prevState = error));
  }

  async function deleteProduct(id: string): Promise<void> {
    const { result, error } = await DeleteProductUseCase(id);
    setError((prevState) => (prevState = error));
  }

  return {
    error,
    deleteProduct,
    updateProduct,
    getProduct,
    onChange,
    ...values,
  };
}
