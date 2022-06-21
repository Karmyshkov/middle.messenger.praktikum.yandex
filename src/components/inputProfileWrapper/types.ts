import { InputType } from 'types';

export interface InputProfileWrapperProps {
  formName: string;
  name: string;
  minlength: string;
  maxlength: string;
  type: InputType;
  value: string;
  helperText: string;
}
