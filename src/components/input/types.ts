import { InputTypeEnum } from 'types';

export interface InputProps {
  onChange?: () => void;
  type: InputTypeEnum;
  helperText: string;
  minlength?: number;
  maxlength?: number;
  classes?: string;
}
