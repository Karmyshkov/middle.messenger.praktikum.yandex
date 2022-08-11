import { InputEnum } from 'types';

export interface InputWrapperProps {
  onInput?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  name: string;
  type: InputEnum;
  helperText: string;
  minlength?: number;
  maxlength?: number;
  classes?: string;
}
