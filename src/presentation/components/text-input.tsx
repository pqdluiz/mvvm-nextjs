import type { NextPage } from "next";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface TextinputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export const TextInput: NextPage<TextinputProps> = ({ ...rest }) => {
  return (
    <input style={{ height: 28, padding: 10, marginBottom: 10 }} {...rest} />
  );
};
