import { InputType } from 'types';

export interface InputProps {
  onInput?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  type: InputType;
  minlength?: string;
  maxlength?: string;
}
