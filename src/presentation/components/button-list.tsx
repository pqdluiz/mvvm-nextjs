import type { NextPage } from "next";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface ButtonListProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  title: string;
  onClick: () => void;
}

export const ButtonList: NextPage<ButtonListProps> = ({ onClick, title }) => {
  return (
    <button style={{ height: 24 }} onClick={onClick}>
      {title}
    </button>
  );
};
