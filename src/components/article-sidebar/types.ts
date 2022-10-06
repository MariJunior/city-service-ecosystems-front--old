export type SizeProp = 'small' | 'regular';

export interface NewsProps {
  title: string;
  date: string;
  link: string;
}

export interface NewsFullProps extends NewsProps {
  size: SizeProp;
}

export interface ArticleSidebarProps {
  news: NewsProps[];
}

export interface ArticleSidebarFullProps extends ArticleSidebarProps {
  discussionLink: string;
  size: SizeProp;
}
