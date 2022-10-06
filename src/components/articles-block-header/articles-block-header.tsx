import { FC, Dispatch, SetStateAction } from 'react';
import styled from '@emotion/styled';

import { OptionProps } from '../cards-filters/types';
import { CardsFilters } from '../cards-filters';
import { CardsProps } from '../news-card/types';

import { getMediaquery } from '../../styles/mixins/mediaqueries';
import { getFont } from '../../styles/mixins/fonts';

export interface OptionsProps {
  label: string;
  value: string;
  action: () => void;
}
export interface HeaderProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  cards: CardsProps[] ;
  setCurrentTab: Dispatch<SetStateAction<CardsProps[]>>;
  setPage?: (arg: number) => void;
}

export const Header: FC<HeaderProps> = ({ title, cards, setCurrentTab, setPage, ...props }) => {
  const showAll = () => {
    setCurrentTab(cards);
    if (setPage) {
      setPage(1);
    }
  };

  const showDiscussed = () => {
    const discussedNews = cards.filter(
      (newCard) => newCard.tag === 'discussed'
    );
    setCurrentTab(discussedNews);
    if (setPage) {
      setPage(1);
    }
  };

  const showSignificant = () => {
    const significantNews = cards.filter(
      (newCard) => newCard.tag === 'significant'
    );
    setCurrentTab(significantNews);
    if (setPage) {
      setPage(1);
    }
  };

  const showPopular = () => {
    const popularNews = cards.filter((newCard) => newCard.tag === 'popular');
    setCurrentTab(popularNews);
    if (setPage) {
      setPage(1);
    }
  };

  const filtersDefaults: OptionProps = {
    label: 'все',
    value: 'all',
    action: () => showAll(),
  };
  const filtersOptions: OptionProps[] = [
    {
      label: 'популярные',
      value: 'popular',
      action: () => showPopular(),
    },
    {
      label: 'обсуждаемые',
      value: 'discussed',
      action: () => showDiscussed(),
    },
    {
      label: 'значимые',
      value: 'significant',
      action: () => showSignificant(),
    },
    {
      label: 'все',
      value: 'all',
      action: () => showAll(),
    },
  ];

  return (
    <Head {...props}>
      <Title>{title}</Title>
      <CardsFilters options={filtersOptions} defaults={filtersDefaults} />
    </Head>
  );
};

const Head = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--colors-darkblue);
  overflow-x: scroll;

  ${getMediaquery('md')} {
    flex-direction: row;
    align-items: flex-start;
    max-width: 730px;
    overflow: visible;
  }

  ${getMediaquery('lg')} {
    align-items: center;
    max-width: 750px;
  }
`;

const Title = styled.h2`
  max-width: 330px;
  margin-top: 0;
  margin-bottom: 10px;

  ${getMediaquery('md')} {
    ${getFont('titleLg')};
    margin: 0 10px 0 0;
  }

  ${getMediaquery('lg')} {
    margin: 0 40px 0 0;
  }
`;
