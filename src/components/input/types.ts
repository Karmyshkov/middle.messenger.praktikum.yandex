import { InputType } from 'types';

export interface InputProps {
  onInput?: () => void;
  onFocus?: () => void;
  type: InputType;
  helperText: string;
  minlength?: number;
  maxlength?: number;
  classes?: string;
}
