import type { NextPage } from "next";
import type { ProductTypes } from "../../data/datasource/contracts";

interface ListProps {
  data: ProductTypes[] | null;
  onRowClick: (id: string) => void;
}

export const List: NextPage<ListProps> = ({ data, onRowClick }) => {
  return (
    <div style={{ padding: 20 }}>
      {data?.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              padding: 20,
              border: "1px solid black",
              margin: 10,
            }}
            onClick={() => onRowClick(item.id)}
          >
            <div>{item.name}</div>
            <div>{item.price}</div>
          </div>
        );
      })}
    </div>
  );
};
