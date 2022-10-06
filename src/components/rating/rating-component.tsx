import { FC } from 'react';
import styled from '@emotion/styled';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';

import { fontColors } from '../../styles/mixins/colors';
import { getFont } from '../../styles/mixins/fonts';
import { getMediaquery } from '../../styles/mixins/mediaqueries';

export interface RatingProps {
  rating: number;
  reviewsCount: number;
}
export const RatingComponent: FC<RatingProps> = ({ rating, reviewsCount }) => {
  return (
    <>
      <MobileRating>
        <CurrentRating>{rating}</CurrentRating>
        <StyledRating
          name='rating-customized'
          value={rating}
          precision={0.5}
          disabled
          size='small'
          emptyIcon={<StarBorderRoundedIcon fontSize='inherit' />}
          icon={<StarRoundedIcon fontSize='inherit' />}
        />
        <RatingCount>{reviewsCount} отзывов</RatingCount>
      </MobileRating>
      <PCRating>
        <CurrentRating>{rating}</CurrentRating>
        <StyledRating
          name='rating-customized'
          value={rating}
          precision={0.5}
          disabled
          size='small'
          emptyIcon={<StarBorderRoundedIcon fontSize='inherit' />}
          icon={<StarRoundedIcon fontSize='inherit' />}
        />
        <RatingCount>{reviewsCount} отзывов</RatingCount>
      </PCRating>
    </>
  );
};

const RatingCount = styled.p`
  ${getFont('medium')};
  font-size: 14px;
  opacity: 0.5;
  margin: 0;
  ${getMediaquery('sm')} {
    display: none;
  }
  ${getMediaquery('md')} {
    display: block;
    margin-left: 10px;
  }
`;

const CurrentRating = styled.p`
  ${getFont('medium')};
  font-weight: 600;
  font-size: 20px;
  line-height: 130%;
  text-align: center;
  margin-right: 5px;
  color: ${fontColors.bahamaBlue};
  margin: 0;
  ${getMediaquery('sm')} {
    margin-right: 10px;
  }

`;

const PCRating = styled.div`
  align-items: center;
  ${getMediaquery('sm')} {
    display: none;
  }
  ${getMediaquery('md')} {
    display: flex;
    justify-content: flex-start;
  }
`;
const MobileRating = styled.div`
  ${getMediaquery('sm')} {
    display: flex;
    align-items: center;
  }
  ${getMediaquery('md')} {
    display: none;
  }
`;
const StyledRating = withStyles({
  root: {
    marginBottom: '0',
  },
  sizeSmall: {
    fontSize: '20px',
  },
  iconFilled: {
    color: '#1B8EFF',
  },
  iconEmpty: {
    color: '#1B8EFF',
  },
  disabled: {
    opacity: '1 !important',
  },
})(Rating);
