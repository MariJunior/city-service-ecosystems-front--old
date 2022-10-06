export interface CommonIconProps {
  alt?: string,
  color?: string;
  width?: number | string;
  height?: number | string;
}

export interface CommonLinkProps {
  name: string,
  link: string,
}

export interface CommonIconLinkProps extends CommonLinkProps {
  logo: string,
}
