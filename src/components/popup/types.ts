export interface PopupProps {
  onClick?: () => void;
  onInput?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  classesPopup?: string;
  classesForm?: string;
  name: string;
  fieldName: string;
  title: string;
  isDefault: boolean;
  helperText?: Text;
  textBtn: string;
}
