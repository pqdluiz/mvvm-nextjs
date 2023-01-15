import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ButtonList, List } from "../../../components";
import { useProductList } from "./view-model";

export const ProductList: NextPage = () => {
  let navigate = useRouter();
  const { products, getProducts } = useProductList();

  useEffect(() => {
    getProducts();
  }, [getProducts]);

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
        <h2>Product List</h2>
        <ButtonList
          title={"New"}
          onClick={() => navigate.push(`/product-detail`)}
        />
      </div>
      <List
        data={products}
        onRowClick={(id) => navigate.push(`/product/detail/${id}`)}
      />
    </div>
  );
};
