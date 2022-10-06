import { FC } from 'react';
import styled from '@emotion/styled';

import { MainArticlesCard } from '../main-card';

import { ArticlesBlockPropsInterface } from '../../articles-block';

import { LinkButtonRounded } from '../../../link-button/link-button-rounded';
import { NewsCard } from '../../../news-card';

import { getMediaquery } from '../../../../styles/mixins/mediaqueries';

export const ArticlesDesktopBody: FC<ArticlesBlockPropsInterface> = ({
  cards,
}) => {
  const renderDesktopMainCards = () => {
    return cards
      .slice(0, 2)
      .map((card) => (
        <MainArticlesCard
          key={Math.random()}
          title={card.title}
          subtitle={card.subtitle!}
          date={card.date!}
          image={card.imageSrc}
        />
      ));
  };

  const renderDesktopSecondaryCards = () => {
    return cards
      .slice(2, 5)
      .map((card) => (
        <NewsCard
          key={Math.random()}
          title={card.title}
          subtitle={card.subtitle!}
          date={card.date!}
          imageSrc={card.imageSrc}
        />
      ));
  };

  return (
    <>
      <Cards>
        <MainCardsWrapper>
          {renderDesktopMainCards()}
        </MainCardsWrapper>
        <CardsWrapper>
          {renderDesktopSecondaryCards()}
        </CardsWrapper>
      </Cards>
      <MoreLink
        link='/'
        platform='text'
        length='regular'
        colors='white'
        text='Показать еще'
      />
    </>
  );
};

const Cards = styled.div`
  ${getMediaquery('lg')} {
    max-width: 1260px;
    margin-bottom: 40px;
  }
`;

const MainCardsWrapper = styled.div`
  ${getMediaquery('lg')} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-flow: row;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    margin-bottom: 50px;
  }
`;

const CardsWrapper = styled.div`
  ${getMediaquery('lg')} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-flow: row;
    grid-column-gap: 20px;
    grid-row-gap: 30px;
  }
`;

const MoreLink = styled(LinkButtonRounded)`
  ${getMediaquery('lg')} {
    width: 170px;
    min-height: 50px;
    margin: 0 auto;
  }
`;
