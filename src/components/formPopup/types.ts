export interface FormPopupProps {
  onSubmit?: () => void;
  onInput?: () => void;
  onFocus?: () => void;
  onClick?: () => void;
  onBlur?: () => void;
  classesForm?: string;
  name: string;
  fieldName: string;
  isDefault: boolean;
  helperText?: Text;
  textBtn: string;
  users?: string;
}
