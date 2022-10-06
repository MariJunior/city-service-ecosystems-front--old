import health from '../../assets/article/health.svg';
import map from '../../assets/article/karta.svg';
import openCity from '../../assets/article/open-city.svg';
import uslugi from '../../assets/article/uslugi.svg';
import { PopularServiceProps } from './types';


export const services: PopularServiceProps[] = [
  {
    title: 'Здоровье петербуржца',
    subtitle: 'Краткое описание Поддержка и развитие регионов  и развитие регионов',
    imageSrc: health,
    tag: 'discussed',
    rating: 4.3
  },
  {
    title: 'Твой бюждет',
    subtitle: 'Краткое описание Поддержка и развитие регионов  и развитие регионов',
    mark: 'popular',
    imageSrc: openCity,
    tag: 'discussed',
    rating: 4.5
  },
  {
    title: 'Наш Санкт-Петербург',
    subtitle: 'Краткое описание Поддержка и развитие регионов  и развитие регионов',
    mark: 'popular',
    imageSrc: uslugi,
    tag: 'popular',
    rating: 3.5
  },
  {
    title: 'Мои документы',
    subtitle: 'Государственные и муниципальные услуги',
    mark: 'popular',
    imageSrc: uslugi,
    tag: 'significant',
    rating: 2,
  },
 {
    title: 'Единая карта петербуржца',
    subtitle: 'Образовательынй онлайн портал',
    mark: 'new',
    imageSrc: map,
    tag: 'significant',
    rating: 2.2
  },
   {
    title: 'Открытый город',
    subtitle: 'Информация о новом социальном проекте',
    mark: 'favorite',
    imageSrc: openCity,
    rating: 4.9
  },
    {
    title: 'Здоровье петербуржца',
    subtitle: 'Краткое описание Поддержка и развитие регионов  и развитие регионов',
    imageSrc: health,
    rating: 3.5
  },
  {
    title: 'Твой бюждет',
    subtitle: 'Краткое описание Поддержка и развитие регионов  и развитие регионов',
    mark: 'popular',
    imageSrc: openCity,
    rating: 4.3,
  },
  {
    title: 'Наш Санкт-Петербург',
    subtitle: 'Краткое описание Поддержка и развитие регионов  и развитие регионов',
    mark: 'popular',
    imageSrc: health,
    rating: 3.2,
  },
  {
    title: 'Мои документы',
    subtitle: 'Государственные и муниципальные услуги',
    mark: 'popular',
    imageSrc: health,
    rating: 2,
  },
 {
    title: 'Единая карта петербуржца',
    subtitle: 'Образовательынй онлайн портал',
    mark: 'new',
    imageSrc: map,
    rating: 5,
  },
   {
    title: 'Открытый город',
    subtitle: 'Информация о новом социальном проекте',
    mark: 'favorite',
    imageSrc: health,
    rating: 4
  },
];
