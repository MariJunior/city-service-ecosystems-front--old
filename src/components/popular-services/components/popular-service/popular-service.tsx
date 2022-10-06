import { FC } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styled from '@emotion/styled';
import Rating from '@material-ui/lab/Rating';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';

import { PopularServiceProps } from '../../types';

import { fontColors } from '../../../../styles/mixins/colors';
import { getFont } from '../../../../styles/mixins/fonts';

export const PopularService: FC<PopularServiceProps> = ({
  imageSrc,
  title,
  rating,
}) => {
  return (
    <Card>
      <Image src={imageSrc} />
      <ContentWrapper>
        <Title>{title}</Title>
        <RatingWrapper>
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
        </RatingWrapper>
      </ContentWrapper>
    </Card>
  );
};

const Card = styled.div`
  width: 184px;
  display: flex;
  flex-direction: column;
  background-color: ${fontColors.white};
  box-shadow: 0px 0px 30px ${fontColors.lightBlue};
  border-radius: 20px;
  padding: 10px;
`;
const Image = styled.img`
  width: 100%;
  margin-bottom: 10px;
`;
const Title = styled.h4`
  ${getFont('small')};
  color: ${fontColors.bahamaBlue};
  width: 100%;
  text-align: left;
  margin-bottom: 13px;
`;
const CurrentRating = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: 130%;
  text-align: center;
  margin-right: 5px;
  color: ${fontColors.bahamaBlue};
`;

const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const RatingWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const StyledRating = withStyles({
  root: {
    marginBottom: 'auto',
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
