import { FC } from 'react';
import styled from '@emotion/styled';

import { CatalogCard } from './components/catalog-card';
import { CardProps } from './types';
import { FILTER_OPTIONS, INTERESTED_CARDS } from './data';
import { CatalogCardsSelect } from './components/catalog-cards-select';
import { NothingFound } from './components/nothing-found';

import { CouldBeInterested } from '../catalog-could-be-interested';

import { getMediaquery } from '../../../styles';


export interface CatalogCardsProps {
  catalogCards: CardProps[];
}

export const CatalogCards: FC<CatalogCardsProps> = ({ catalogCards }) => {
  const isNothingFound = () => {
    if (!catalogCards.length) {
      return (
        <>
          <NothingFound
            title={'Нам очень жаль'}
            subtitle={'Но по Вашему запросу ничего не найдено'}
            buttonText={'Предложить свой сервис'}
          />
          <CouldBeInterested cards={INTERESTED_CARDS} />
        </>
      );
    }
  };

  const renderCatalogCards = () =>
    catalogCards.map((item, index) => (
      <CatalogCard key={index} type='primary' card={item} />
    ));

  return (
    <Wrapper>
      <CatalogCardsSelect list={FILTER_OPTIONS} />
      {renderCatalogCards()}
      {isNothingFound()}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${getMediaquery('sm')} {
    max-width: 375px;
  }

  ${getMediaquery('md')} {
    max-width: 728px;
  }
  ${getMediaquery('lg')} {
    max-width: 904px;
  }
`;
