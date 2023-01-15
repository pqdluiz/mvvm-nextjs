import { useState } from "react";
import {
  DeleteProductUseCase,
  GetProductUseCase,
  UpdateProductUseCase
} from "../../../../domain";

interface ProducDetailViewModelProps {
  id: null;
  name: string;
  price: number;
  error: string;
  deleteProduct: (id: string) => Promise<void>;
  updateProduct: (id: string) => Promise<void>;
  getProduct: (id: string) => Promise<void>;
  onChange: (value: string, prop: string) => void;
}

export function useProductDetail(): ProducDetailViewModelProps {
  const [error, setError] = useState<string>("");
  const [values, setValues] = useState({
    id: null,
    name: "",
    price: 0,
  });

  async function getProduct(id: string) {
    const { result, error } = await GetProductUseCase(id);

    setError((prevState) => (prevState = ""));
    setValues((prevState) => (prevState = { ...result }));
  }

  function onChange(value: string, prop: any): void {
    setValues((prevState) => (prevState = { ...values, [prop]: value }));
  }

  async function updateProduct(id: string): Promise<void> {
    const { result, error } = await UpdateProductUseCase(id, values);
    setError((prevState) => (prevState = ""));
  }

  async function deleteProduct(id: string): Promise<void> {
    const { result, error } = await DeleteProductUseCase(id);
    setError((prevState) => (prevState = ""));
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
