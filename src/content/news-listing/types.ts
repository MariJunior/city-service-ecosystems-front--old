import { NewsCardProps } from '../../components/news-card/types';

export interface CardsProps extends NewsCardProps {
  tag?: 'discussed' | 'significant' | 'popular' | string;
}
