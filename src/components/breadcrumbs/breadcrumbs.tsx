import { FC } from 'react';
import styled from '@emotion/styled';

import { getFont } from '../../styles/mixins/fonts';
import { fontColors } from '../../styles/mixins/colors';
import ArrowIcon from '../../assets/article/arrow_left.svg';

export interface BreadCrumbsProps {
  place: string;
  link: string;
  currentPlace: string;
}

export const BreadCrumbs: FC<BreadCrumbsProps> = ({
  place,
  currentPlace,
  link,
}) => {
  return (
    <Wrapper>
      <Container>
        <Place href={link}>{place}</Place>
        <Arrow src={ArrowIcon} alt='arrow.svg' />
        <CurrentPlace>{currentPlace}</CurrentPlace>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1260px;
  width: 100%;
  margin-bottom: 35px;
`;

const Container = styled.div`
  width: 260px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Place = styled.a`
  ${getFont('medium')};
  color: ${fontColors.dodgerBlue};
  text-decoration: none;
`;

const CurrentPlace = styled.a`
  ${getFont('medium')};
  color: ${fontColors.dodgerBlue};
  user-select: none;
`;

const Arrow = styled.img`
  width: 12px;
  height: 8px;
`;
