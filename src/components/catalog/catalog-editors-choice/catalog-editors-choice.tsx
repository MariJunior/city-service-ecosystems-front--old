import { FC } from 'react';
import styled from '@emotion/styled';

import { EditorsChoiceCardProps } from './types';
import { Card } from './components/card';

import { getMediaquery, getFont } from '../../../styles';

export interface CatalogEditorsChoiceProps {
  editorsChoiceCards: EditorsChoiceCardProps[];
  sectionTitle: string;
}

export const CatalogEditorsChoice: FC<CatalogEditorsChoiceProps> = ({
  editorsChoiceCards,
  sectionTitle,
}) => {
  return (
    <Wrapper>
      <SectionTitle>{sectionTitle}</SectionTitle>
      <Cards>
        {editorsChoiceCards.map(({ title, image, icon, rating, id }) => (
          <Card
            key={id}
            title={title}
            image={image}
            icon={icon}
            rating={rating}
          />
        ))}
      </Cards>
    </Wrapper>
  );
};

const SectionTitle = styled.h3`
  ${getFont('title')}
  margin: 0 0 30px 0;
  padding-left: 20px;
  align-self: flex-start;
`;

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  ${getMediaquery('sm')} {
    width: 375px;
    overflow-x: scroll;
  }
  ${getMediaquery('md')} {
    width: 728px;
  }
  ${getMediaquery('lg')} {
    width: 904px;
    overflow: visible;
  }
`;

const Cards = styled.div`
  display: grid;

  ${getMediaquery('sm')} {
    width: 375px;
    overflow-x: scroll;
    grid-template-columns: repeat(3, 260px);
    grid-gap: 20px;
  }
  ${getMediaquery('md')} {
    width: 728px;
  }
  ${getMediaquery('lg')} {
    width: 904px;
    overflow: visible;
    grid-template-columns: repeat(3, 275px);
    grid-gap: 40px;
  }
`;
