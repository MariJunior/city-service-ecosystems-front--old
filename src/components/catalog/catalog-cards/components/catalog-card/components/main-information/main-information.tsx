import { FC } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { Header } from '../main-information/components/header';

import { CardTypeProps, CardProps } from '../../../../types';

import { CatalogLinksList } from '../../../../../catalog-links-list';

import { RatingComponent } from '../../../../../../rating/rating-component';

import { getMediaquery, getFont } from '../../../../../../../styles';
import { switchProp } from '../../../../../../../lib';

export interface CatalogCardMainInfoProps {
  card: CardProps;
  type: CardTypeProps;
}
export const MainInformation: FC<CatalogCardMainInfoProps> = ({
  card,
  type,
}) => {
  return (
    <>
      <Image type={type} src={card.icon} alt={card.title} />
      <Wrapper type={type}>
        <Header
          icon={card.icon}
          title={card.title}
          rating={card.rating}
          reviewsCount={card.reviewsCount}
          link={card.link!}
          tabletLinks={card.tabletLinks}
          type={type}
        />
        <AboutApp type={type}>{card.about}</AboutApp>
        <RatingWrapper>
          <RatingComponent
            rating={card.rating}
            reviewsCount={card.reviewsCount}
          />
        </RatingWrapper>
        <CatalogLinksList
          interestedCard={false}
          mobile
          links={card.tabletLinks}
        />
      </Wrapper>
    </>
  );
};

const RatingWrapper = styled.div`
  ${getMediaquery('sm')} {
    display: none;
  }
  ${getMediaquery('md')} {
    display: block;
  }
`;
const Wrapper = styled.div<{ type: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${getMediaquery('lg')} {
    ${switchProp('type', {
      primary: css`
        padding-top: 10px;
        padding-bottom: 10px;
      `,
      secondary: css`
        padding: 0;
      `,
    })}
  }
`;

const Image = styled.img<{ type: string }>`
  ${getMediaquery('sm')} {
    display: none;
  }

  ${getMediaquery('md')} {
    display: block;
    margin-right: 20px;
    ${switchProp('type', {
      primary: css`
        width: 180px;
        height: 180px;
      `,
      secondary: css`
        width: 189px;
        height: 189px;
      `,
    })}
  }
  ${getMediaquery('lg')} {
    ${switchProp('type', {
      primary: css`
        width: 160px;
        height: 160px;
      `,
      secondary: css`
        width: 186px;
        height: 186px;
      `,
    })}
  }
`;

const AboutApp = styled.p<{ type: string }>`
  ${getFont('medium')};
  font-size: 14px;
  opacity: 0.5;
  margin: 0;

  ${getMediaquery('sm')} {
    max-width: 100%;
    margin-bottom: 10px;
  }

  ${getMediaquery('md')} {
    margin-bottom: 0px;
  }

  ${getMediaquery('lg')} {
    ${switchProp('type', {
      primary: css`
        max-width: 374px;
        margin-bottom: 0;
      `,
      secondary: css`
        max-width: 100%;
      `,
    })}
  }
`;
