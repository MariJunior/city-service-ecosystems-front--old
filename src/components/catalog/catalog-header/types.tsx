export interface SocialRoleItem {
  title: string;
  icon?: React.ReactElement;
  id: number;
}

export interface SocialRoleProps {
  title: string;
  icon?: React.ReactElement;
  id: number;
  selectedItems?: number[] | null;
  setSelectedItems?: (arg: number | null) => void;
}
