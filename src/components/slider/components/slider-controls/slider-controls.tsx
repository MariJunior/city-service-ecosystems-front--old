import { FC } from 'react';
import styled from '@emotion/styled';
import 'swiper/swiper-bundle.css';

import ArrowLeft from '../../../../assets/arrow_left.svg';
import ArrowRight from '../../../../assets/arrow_right.svg';
import { getMediaquery } from '../../../../styles/mixins/mediaqueries';

export interface SliderControlsProps {
  goPrevSlide: () => void;
  goNextSlide: () => void;
}

export const SliderControls: FC<SliderControlsProps> = ({
  goPrevSlide,
  goNextSlide,
}) => {
  return (
    <SwiperControlsWrapper>
      <PaginationBullets className='swiper-pagination swiper-pagination-bullets'></PaginationBullets>
      <SwiperButtons>
        <Button
          style={{ backgroundImage: `url(${ArrowLeft})` }}
          onClick={goPrevSlide}
        />
        <Button
          style={{ backgroundImage: `url(${ArrowRight})` }}
          onClick={goNextSlide}
        />
      </SwiperButtons>
    </SwiperControlsWrapper>
  );
};

const SwiperControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 21px;
  padding-left: 10px;
`;

const SwiperButtons = styled.div`
  ${getMediaquery('sm')} {
    display: none;
  }

  ${getMediaquery('lg')} {
    display: flex;
    justify-content: space-between;
    width: 56px;
  }
`;

const Button = styled.button`
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  background-color: transparent;
  width: 9px;
  height: 15px;
  cursor: pointer;
`;

const PaginationBullets = styled.div`
  display: flex;
`;
