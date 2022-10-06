import { CardsProps } from './types';
import { BannerProps } from '../../components';

import imgNewsCardMain from '../../storybook/images/news-card-main-1.png';
import imgNewsCardFamily from '../../storybook/images/news-card-1.png';
import imgNewsCardNewYear from '../../storybook/images/news-card-2.jpeg';
import imgNewsCardOffice from '../../storybook/images/news-card-3.png';
import imgNewsCardFamilyBig from '../../storybook/images/news-card-4.png';
import imgNewsCardCity from '../../storybook/images/news-card-5.jpeg';
import imgNewsCardSocial from '../../storybook/images/news-card-6.jpeg';
import bannerImage from '../../assets/banner_image.png';
import bannerButton from '../../assets/banner_button.svg';

export const news: CardsProps[] = [
  {
    title: 'Что изменилось в начислении пособий для безработных в 2020 году',
    subtitle: 'Электронная трудовая книжка, справка о статусе предпенсионера и размере пенсии',
    imageSrc: imgNewsCardMain,
    date: '1 декабря 2021',
    tag: 'discussed'
  },
  {
    title: 'Что изменилось в начислении пособий для безработных в 2020 году',
    subtitle: 'Электронная трудовая книжка, справка о статусе предпенсионера и размере пенсии',
    imageSrc: imgNewsCardFamily,
    date: '2 декабря 2021',
    tag: 'discussed'
  },
  {
    title: 'Введены новые правила для разработчиков ',
    subtitle: 'Новые суммы и условия',
    imageSrc: imgNewsCardNewYear,
    date: '2 декабря 2021',
    tag: 'discussed'
  },
  {
    title: '7 выплат на детей, которые изменятся в 2020 году',
    subtitle: 'Новые суммы и условия',
    imageSrc: imgNewsCardFamilyBig,
    date: '2 декабря 2021',
    tag: 'popular'
  },
  {
    title: 'Просроченные паспорта будут действительными',
    subtitle: 'Новые суммы и условия',
    imageSrc: imgNewsCardOffice,
    date: '2 декабря 2021',
    tag: 'popular'
  },
  {
    title: 'Как оформить ежемесячную выплату на детей от 3 до 7 лет',
    subtitle: 'Новые суммы и условия',
    imageSrc: imgNewsCardCity,
    date: '2 декабря 2021',
    tag: 'popular'
  },
  {
    title: 'Как оформить банкротство через МФЦ без суда и госпошлины',
    subtitle: 'Новые суммы и условия',
    imageSrc: imgNewsCardSocial,
    date: '2 декабря 2021',
    tag: 'significant'
  },
  {
    title: 'Тестовая significant карточка',
    subtitle: 'Электронная трудовая книжка, справка о статусе предпенсионера и размере пенсии',
    imageSrc: imgNewsCardFamily,
    date: '10 декабря 2021',
    tag: 'significant'
  },
  {
    title: 'Что изменилось в начислении пособий для безработных в 2020 году',
    subtitle: 'Электронная трудовая книжка, справка о статусе предпенсионера и размере пенсии',
    imageSrc: imgNewsCardNewYear,
    date: '3 декабря 2021',
    tag: 'significant',
  },
  {
    title: 'Тестовая карточка',
    subtitle: 'Новые суммы и условия',
    imageSrc: imgNewsCardFamilyBig,
    date: '13 декабря 2021'
  },
  {
    title: 'Тестовая карточка',
    subtitle: 'Электронная трудовая книжка, справка о статусе предпенсионера и размере пенсии',
    imageSrc: imgNewsCardNewYear,
    date: '4 декабря 2021'
  },
];

export const newsListingBanner: BannerProps = {
  title: 'Здоровье петербуржца',
  subtitle: 'Поддержка и развитие регионов',
  linkText: 'Узнать больше',
  href: '/',
  mainImage: bannerImage,
  iconImage: bannerButton,
  withSpots: true
};
