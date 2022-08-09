export interface PopupProps {
  onSubmit?: () => void;
  onInput?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onClick?: () => void;
  classesPopup?: string;
  classesForm?: string;
  name: string;
  fieldName?: string;
  title: string;
  isDefault?: boolean;
  helperText?: Text;
  textBtn?: string;
  users?: any;
}
