import { InputType } from 'types';

export interface InputWrapperProps {
  onInput?: () => void;
  type: InputType;
  helperText: string;
  minlength?: number;
  maxlength?: number;
  classes?: string;
}
