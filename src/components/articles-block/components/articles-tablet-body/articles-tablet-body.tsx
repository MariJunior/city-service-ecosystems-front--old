import { FC } from 'react';
import styled from '@emotion/styled';

import { MainArticlesCard } from '../main-card';

import { ArticlesBlockPropsInterface } from '../../articles-block';

import { NewsCard } from '../../../news-card';
import { LinkButtonRounded } from '../../../link-button/link-button-rounded';

import { getMediaquery } from '../../../../styles/mixins/mediaqueries';

export const ArticlesTabletBody: FC<ArticlesBlockPropsInterface> = ({
  cards,
}) => {
  const renderTabletMainCards = () => {
    return cards
      .slice(0, 1)
      .map((card) => (
        <StyledMainCard
          key={Math.random()}
          title={card.title}
          subtitle={card.subtitle!}
          date={card.date!}
          image={card.imageSrc}
        />
      ));
  };

  const renderTabletSecondaryCards = () => {
    return cards
      .slice(1, 3)
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
        {renderTabletMainCards()}
        {renderTabletSecondaryCards()}
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
  display: grid;
  grid-row-gap: 20px;
  justify-items: center;
  margin-bottom: 20px;

  ${getMediaquery('md')} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-auto-flow: row;
    grid-column-gap: 20px;
    grid-row-gap: 30px;
    max-width: 728px;
    margin-bottom: 30px;
  }

  ${getMediaquery('lg')} {
    max-width: 1260px;
  }
`;

const StyledMainCard = styled(MainArticlesCard)`
  ${getMediaquery('md')} {
    grid-column: 1 / -1;
  }
`;

const MoreLink = styled(LinkButtonRounded)`
  width: 170px;
  min-height: 50px;
  margin: 0 auto;
`;
