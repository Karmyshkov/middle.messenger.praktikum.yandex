import { InputType } from 'types';

export interface InputWrapperProps {
  onInput?: () => void;
  name: string;
  type: InputType;
  helperText: string;
  minlength?: number;
  maxlength?: number;
  classes?: string;
}
