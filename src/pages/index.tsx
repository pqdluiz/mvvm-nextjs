import { Inter } from "@next/font/google";
import { ProductList } from "../presentation";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <ProductList />;
}
