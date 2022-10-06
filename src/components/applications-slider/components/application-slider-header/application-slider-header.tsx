import { FC } from 'react';
import styled from '@emotion/styled';

import { AppHeaderSliderProps } from '../../applications-slider';

import { CardsFilters } from '../../../cards-filters';

import { getMediaquery } from '../../../../utils/utils';
import { getFont } from '../../../../styles/mixins/fonts';
import { fontColors } from '../../../../styles/mixins/colors';

export const ApplicationSliderHeader: FC<AppHeaderSliderProps> = ({
  tabs,
  tabsTitle,
  defaults,
}) => {
  return (
    <StyledHeader>
      <Title>{tabsTitle}</Title>
      <CardsFilters options={tabs} defaults={defaults}></CardsFilters>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  width: 1280px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-left: 50px;
  overflow-y: scroll;
  color: ${fontColors.chathamsBlue};

  ::-webkit-scrollbar {
    width: 0px;
  }

  ${getMediaquery('sm')} {
    max-width: 375px;
    margin: 0 auto 30px;
    padding: 0 20px 10px 20px;
    flex-direction: column;
  }

  ${getMediaquery('md')} {
    max-width: 768px;
    margin: 0 auto 30px;
    box-sizing: border-box;
    align-items: center;
    flex-direction: row;
    padding-left: 20px;
    overflow-y: visible;
  }
  ${getMediaquery('lg')} {
    max-width: 1280px;
    margin-bottom: 0;
  }
`;
const Title = styled.h2`
  margin-bottom: 10px;
  ${getMediaquery('md')} {
    ${getFont('titleLg')};
    margin: 0 20px 0 0;
  }

  ${getMediaquery('lg')} {
    margin: 0 40px 0 0;
  }
`;
