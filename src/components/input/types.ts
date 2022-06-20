import { InputType } from 'types';

export interface InputProps {
  onFocus?: () => void;
  onBlur?: () => void;
  type: InputType;
  minlength?: string;
  maxlength?: string;
}
