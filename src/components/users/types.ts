export interface UsersProps {
  onClick: () => void;
  users: string;
  type: 'delete' | 'add';
}
