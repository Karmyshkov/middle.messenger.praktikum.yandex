import { InputType } from 'types';

export interface InputProfileWrapperProps {
  onInput?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  formName: string;
  name: string;
  minlength: string;
  maxlength: string;
  type: InputType;
  value: string;
  helperText: string;
}
