import { InputType } from 'types';

export interface InputProps {
  onChangeInput?: () => void;
  type: InputType;
  helperText: string;
  minlength?: number;
  maxlength?: number;
  classes?: string;
}
