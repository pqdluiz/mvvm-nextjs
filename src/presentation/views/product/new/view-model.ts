import { useState } from "react";
import { CreateProductUseCase } from "../../../../domain";

interface ProductNewViewModelProps {
  error: string;
  onChange: (value: string, prop: string) => void;
  saveProduct: () => Promise<void>;
  name: string;
  price: number;
}

export function useNewProduct(): ProductNewViewModelProps {
  const [error, setError] = useState("");
  const [values, setValues] = useState({
    name: "",
    price: 0,
  });

  const onChange = (value: string, prop: string): void =>  {
    setValues((prevState) => (prevState = { ...values, [prop]: value }));
  }

  const saveProduct = async (): Promise<void> => {
    const { result, error } = await CreateProductUseCase(values);
    setError((prevState) => (prevState = "error"));
  }

  return {
    ...values,
    error,
    onChange,
    saveProduct,
  };
}
