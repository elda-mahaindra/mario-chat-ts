export interface ITextInputProps {
  id: string;
  name: string;
  placeholder?: string;
  type: "text" | "password";
  value?: string;
  onChange: (prop: string, value: string) => void;
  onKeyPress?: () => void;
}
