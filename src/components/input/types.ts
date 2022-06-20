import { InputTypeEnum } from 'types';

export interface InputProps {
  onChangeInput?: () => void;
  type: InputTypeEnum;
  helperText: string;
  minlength?: number;
  maxlength?: number;
  classes?: string;
}
