// ---------------------------------------------- modules import
import { ChangeEvent, FunctionComponent } from "react";

import { ITextInputProps } from "./common";

// ---------------------------------------------- the component
const TextInput: FunctionComponent<ITextInputProps> = ({
  id,
  name,
  placeholder,
  type,
  value,
  onChange,
  onKeyPress,
}) => {
  // ---------------------------------------------- handlers
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    onChange(e.currentTarget.name, e.currentTarget.value);

  // ---------------------------------------------- content
  return (
    <input
      id={id}
      name={name}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={handleChange}
      onKeyPress={onKeyPress}
    />
  );
};

export default TextInput;
