export interface PopularServiceProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  date?: string;
  tag?: string;
  rating?: number;
  mark?: string;
}
export interface PopularServicesProps {
  services: PopularServiceProps[];
}
