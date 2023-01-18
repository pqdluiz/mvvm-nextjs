import type { NextPage } from "next";
import { useRouter } from "next/router";

import { ButtonList, TextInput } from "../../../components";
import { useNewProduct } from "./view-model";

export const ProductNew: NextPage = () => {
  let navigate = useRouter();
  const { name, price, onChange, saveProduct } = useNewProduct();

  const handleSubmit = () => {
    saveProduct();
    navigate.push("/");
  };

  return (
    <div className="page">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <h2>New Product</h2>
        <ButtonList title={"Save"} onClick={handleSubmit} />
      </div>
      
      <div style={{ display: "flex", flexDirection: "column", padding: 30 }}>
        <TextInput
          placeholder="Product Name"
          autoFocus={true}
          value={name}
          onChange={(event) => onChange(event.target.value, "name")}
        />
        
        <TextInput
          placeholder="Product Price"
          type="number"
          value={price}
          onChange={(e) => onChange(e.target.value, "price")}
        />
      </div>
    </div>
  );
};
