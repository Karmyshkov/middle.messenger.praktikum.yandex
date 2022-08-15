export interface UserItemProps {
  onClick: () => void;
  id: number;
  avatar: string;
  login: string;
  email: string;
  type: 'delete' | 'add';
  role: 'regular' | 'admin';
}
