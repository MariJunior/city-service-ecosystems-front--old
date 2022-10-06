export interface NewsCardProps {
  imageSrc: string,
  title: string,
  subtitle: string,
  date?: string,
}

export interface CardsProps extends NewsCardProps {
  tag?: 'discussed' | 'significant' | 'popular' | string;
}
