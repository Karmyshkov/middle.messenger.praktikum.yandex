export interface PopupProps {
  onClick: () => void;
  classesPopup?: string;
  classesForm?: string;
  name: string;
  title: string;
  isDefault: boolean;
  helperText?: Text;
  textBtn: string;
}
