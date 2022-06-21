import { InputType } from 'types';

export interface InputProfileWrapperProps {
  name: string;
  minlength: string;
  maxlength: string;
  type: InputType;
  value: string;
  helperText: string;
}
