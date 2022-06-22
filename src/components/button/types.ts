import { ButtonType } from 'types';

export interface ButtonProps {
  onClick: () => void;
  textBtn: string;
  type: ButtonType;
  classes?: string;
}
