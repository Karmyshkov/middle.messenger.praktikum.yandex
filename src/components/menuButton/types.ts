import { ButtonType } from 'types';

export interface MenuButtonProps {
  text: string;
  icon: string;
  alt: string;
  classes?: string;
  type: ButtonType;
  onClick: () => void;
}
