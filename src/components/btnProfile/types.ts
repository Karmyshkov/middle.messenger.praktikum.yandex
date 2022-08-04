export interface BtnProfileProps {
  onClick?: () => void;
  text: string;
  classes?: string;
  href?: string;
  type: 'button' | 'link';
}
