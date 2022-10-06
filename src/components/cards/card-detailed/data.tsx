import { AppLinkProps, AppMetaInfoProps } from './types';

import { ReactComponent as WebIcon } from '../../../icons/fa-solid_web.svg';
import { ReactComponent as ChatBotIcon } from '../../../icons/fa-solid_robot.svg';
import { ReactComponent as YandexIcon } from '../../../icons/fa-solid_yandex.svg';
import { ReactComponent as VkIcon } from '../../../icons/fa-solid_vk.svg';
import { ReactComponent as GooglePlayIcon } from '../../../icons/fa-solid_google-play.svg';
import { ReactComponent as AppleIcon } from '../../../icons/fa-solid_apple.svg';

export const appLinksEkpspb: AppLinkProps[] = [
  {
    link: '1',
    content: <><WebIcon /> website.spb.ru</>,
  },
  {
    link: '/2',
    content: <><ChatBotIcon /> Чат-бот</>,
  },
  {
    link: '/3',
    content: <><YandexIcon /> Yandex</>,
  },
  {
    link: '/4',
    content: <><VkIcon /> mini app</>,
  },
  {
    link: '/5',
    content: <><GooglePlayIcon /> Google Play</>,
  },
  {
    link: '/6',
    content: <><AppleIcon /> App store</>,
  },
];

export const appDetailsEkpspb: AppMetaInfoProps = {
  currentVer: '3.5.7',
  updateDate: '15 мая 2021 г.',
  size: '50,7 МБ',
  installs: '50 000 +',
  compability: {
    android: 'Android 6.0 и выше',
    ios: 'iOS 9.0 и выше',
  },
  developer: {
    name: 'СПб ГУП “СПб ИАЦ”',
  },
  permissionsLink: '/',
  reportLink: '/',
  contacts: {
    tel: '+7 (812) 432-18-32',
    website: 'gorod.gov.spb.ru',
    email: 'gorod.gov@spb.ru',
  },
  legalAddress: '197183, город Санкт-петербург, Дибуновская улица, дом 1/14',
  roles: [
    {
      roleName: 'Я люблю Петербург',
      link: '/',
    },
    {
      roleName: 'Я гражданин',
      link: '/',
    },
    {
      roleName: 'Я живу здесь',
      link: '/',
    },
    {
      roleName: 'Я молодец',
      link: '/',
    },
    {
      roleName: 'Я с питомцем',
      link: '/',
    },
  ],
};
