import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { ButtonList, TextInput } from "../../../components";
import { useProductDetail } from "./view-model";

export const ProductDetail: NextPage = () => {
  const navigate = useRouter();
  const { onChange, deleteProduct, getProduct, name, price, updateProduct } =
    useProductDetail();

  useEffect(() => {
    getProduct(navigate.pathname);
  }, [getProduct, navigate.pathname]);

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
        <h2>Edit Product</h2>
        <div style={{ display: "flex" }}>
          <ButtonList
            title="Delete"
            onClick={() => {
              deleteProduct(navigate.pathname);
              navigate.push("/");
            }}
          />

          <ButtonList
            title="Update"
            onClick={() => {
              updateProduct(navigate.pathname);
              navigate.push("/");
            }}
          />
        </div>
      </div>
      
      <div className="flex flex-col p-32">
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
          onChange={(event) => onChange(event.target.value, "price")}
        />
      </div>
    </div>
  );
};
