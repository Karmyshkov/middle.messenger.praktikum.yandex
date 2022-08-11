import { InputEnum } from 'types';

export interface InputProps {
  onInput?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  name: string;
  type: InputEnum;
  minlength?: string;
  maxlength?: string;
}
