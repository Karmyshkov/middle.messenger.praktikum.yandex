import { InputType } from 'types';

export interface InputProps {
  onInput?: () => void;
  onFocus?: () => void;
  type: InputType;
  minlength?: string;
  maxlength?: string;
}
