import { NextPage } from "next";

interface ButtonListProps {
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
