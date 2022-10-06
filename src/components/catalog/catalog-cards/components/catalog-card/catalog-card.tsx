import { FC } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { MainInformation, SecondaryInformation } from './components';

import { CardProps, CardTypeProps } from '../../types';

import { LinkButtonRectangular } from '../../../../link-button/link-button-rectangular';

import { getMediaquery, fontColors } from '../../../../../styles';
import { switchProp } from '../../../../../lib';

export interface CatalogCardProps {
  card: CardProps;
  type: CardTypeProps;
}

export const CatalogCard: FC<CatalogCardProps> = ({ card, type }) => {
  return (
    <Card type={type}>
      <MainInformation card={card} type={type} />
      <InfoWrapper type={type}>
        <SecondaryInformation
          socialNetworks={card.socialNetworks! && card.socialNetworks}
          developer={card.developer! && card.developer}
          updated={card.updated! && card.updated}
        />
        <MobileAppsSection>
          <LinkButtonRectangular link='http://google.com' platform='google' />
          <LinkButtonRectangular
            link='http://appstore.com'
            platform='appstore'
          />
        </MobileAppsSection>
      </InfoWrapper>
    </Card>
  );
};

const InfoWrapper = styled.div<{ type: string }>`
  ${getMediaquery('sm')} {
    display: none;
  }
  ${getMediaquery('lg')} {
    ${switchProp('type', {
      primary: css`
        display: flex;
      `,
      secondary: css`
        display: none;
      `,
    })}
    flex-direction: column;
    align-items: end;
  }
`;

const Card = styled.div<{ type: string }>`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 10px 10px 10px 10px;
  box-shadow: 0px 0px 30px ${fontColors.lightBlue};
  border-radius: 20px;
  margin-bottom: 20px;

  :nth-last-of-type(1) {
    margin-bottom: 0;
  }

  ${getMediaquery('sm')} {
    max-width: 335px;
    justify-content: normal;
    box-sizing: content-box;
  }

  ${getMediaquery('md')} {
    max-width: 728px;
    justify-content: normal;
    box-sizing: border-box;
  }

  ${getMediaquery('lg')} {
    max-width: 904px;

    ${switchProp('type', {
      primary: css`
        justify-content: space-between;
      `,
      secondary: css`
        justify-content: initial;
      `,
    })}
    :hover {
      transition: 1s;
      box-shadow: 0px 10px 30px ${fontColors.mayaBlue};
    }
  }
`;

const MobileAppsSection = styled.div`
  display: grid;
  grid-column-gap: 10px;
  grid-template-columns: repeat(2, 145px);
  align-items: center;
  justify-content: space-between;
  justify-self: flex-end;
`;
