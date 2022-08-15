import { InputEnum } from 'types';

export interface InputProfileProps {
  onInput?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  name: string;
  minlength?: string;
  maxlength?: string;
  type: InputEnum;
  value: string;
}
