export interface LinkProps {
  href: string;
  text: string;
}

export interface SocialNetworkProps {
  title: string;
  href: string;
}

export interface TabletLink{
title: string,
href: string,
icon: string,
}

export interface CardProps {
  title: string;
  icon: string;
  link?: LinkProps;
  about: string;
  rating: number;
  developer?: string;
  socialNetworks?: SocialNetworkProps[];
  updated?: string;
  reviewsCount: number;
  tabletLinks: TabletLink[]
}

export type CardTypeProps = 'primary' | 'secondary';
