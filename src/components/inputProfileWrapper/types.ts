import { InputEnum } from 'types';

export interface InputProfileWrapperProps {
  onInput?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  formName: string;
  name: string;
  minlength: string;
  maxlength: string;
  type: InputEnum;
  value: string;
  helperText: string;
}
