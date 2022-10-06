import { FC } from 'react';
import styled from '@emotion/styled';

import { InformationCard } from './components/information-card/information-card';

import { getMediaquery } from '../../styles/mixins/mediaqueries';

export interface InformationCardProps {
  cardImage: string;
  title: string;
  subtitle: string;
  href?: string;
}

export interface InformationBlockProps {
  informationCards: InformationCardProps[];
}

export const InformationBlock: FC<InformationBlockProps> = ({
  informationCards,
}) => {
  const renderInformationBlock = () => {
    return informationCards.map((card, index) => (
      <InformationCard
        title={card.title}
        subtitle={card.subtitle}
        cardImage={card.cardImage}
        href={card.href}
        key={index}
      />
    ));
  };

  return <Wrapper>{renderInformationBlock()}</Wrapper>;
};

const Wrapper = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;

  ${getMediaquery('sm')} {
    max-width: 335px;
    flex-direction: column;
  }

  ${getMediaquery('md')} {
    width: 100%;
    max-width: 728px;
    flex-direction: row;
    margin: 30px 0 0 0;
  }

  ${getMediaquery('lg')} {
    max-width: 360px;
    min-height: 440px;
    flex-direction: column;
    margin: 0 0 0 30px;
    align-self: baseline;
  }
`;
