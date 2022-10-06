import { CardsProps } from '../components/news-card/types';

const mediaqueries = {
  sm: '@media (min-width: 375px)',
  md: '@media (min-width: 768px)',
  lg: '@media (min-width: 1300px)',
};

export const getMediaquery = (mq: keyof typeof mediaqueries) => {
  return mediaqueries[mq];
};

export const cardStringToDate = (text: string) => {
  const monthArr = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  const textParts = text.split(' ');
  const monthIndex = monthArr.findIndex(elem => elem.includes(textParts[1]));

  return new Date(Number(textParts[2]), monthIndex, Number(textParts[0]));
};

export const sortObjectsByDate: (a: CardsProps, b: CardsProps) => number = (a, b) => {
  if (!!a.date && !!b.date) {
    const dateA = cardStringToDate(a.date).getTime();
    const dateB = cardStringToDate(b.date).getTime();
    return dateA > dateB ? 1 : -1;
  }
  return 0;
};
