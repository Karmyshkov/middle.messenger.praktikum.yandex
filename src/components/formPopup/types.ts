export interface FormPopupProps {
  onSubmit?: () => void;
  classesForm?: string;
  name: string;
  fieldName: string;
  isDefault: boolean;
  helperText?: Text;
  textBtn: string;
}
