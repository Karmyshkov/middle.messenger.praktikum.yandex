import { InputType } from 'types';

export interface InputProfileProps {
  onInput?: () => void;
  name: string;
  minlength?: string;
  maxlength?: string;
  type: InputType;
  value: string;
}
