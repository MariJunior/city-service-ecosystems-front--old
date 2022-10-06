export interface TabletLink{
title: string,
href: string,
icon: string,
}

export interface CouldBeInterestedCardProps {
  title: string;
  icon: string;
  about: string;
  rating: number;
  reviewsCount: number;
  tabletLinks: TabletLink[]
}