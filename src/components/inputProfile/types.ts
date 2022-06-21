import { InputType } from 'types';

export interface InputProfileProps {
  name: string;
  minlength: string;
  maxlength: string;
  type: InputType;
  value: string;
  helperText: string;
}
