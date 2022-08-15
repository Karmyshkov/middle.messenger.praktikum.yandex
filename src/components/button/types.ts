import { ButtonEnum } from 'types';

export interface ButtonProps {
  onClick: () => void;
  textBtn?: string;
  type: ButtonEnum;
  classes?: string;
}
