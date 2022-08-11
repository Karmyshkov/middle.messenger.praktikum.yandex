import { ButtonEnum } from 'types';

export interface MenuButtonProps {
  text: string;
  icon: string;
  alt: string;
  classes?: string;
  type: ButtonEnum;
  onClick: () => void;
}
