import { FC } from 'react';
import styled from '@emotion/styled';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';

import { EditorsChoiceCardProps } from '../../types';

import { getMediaquery, getFont, fontColors } from '../../../../../styles';

export const Card: FC<EditorsChoiceCardProps> = ({
  image,
  icon,
  rating,
  title,
}) => {
  return (
    <Wrapper>
      <Image style={{ backgroundImage: `url(${image})` }} />
      <Padding>
        <Header>
          <Icon alt={title} src={icon} />
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
        </Header>
        <Title>{title}</Title>
      </Padding>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${getMediaquery('sm')} {
    width: 260px;
    background: #ffffff;
    box-shadow: 0px 0px 30px rgba(0, 102, 255, 0.15);
    border-radius: 20px;
    margin-right: 20px;

    :nth-last-of-type(1) {
      margin-right: 0;
    }
  }
  ${getMediaquery('lg')} {
    width: 275px;
    margin-right: 40px;
  }
`;

const CurrentRating = styled.p`
  ${getFont('title')}
  font-weight: bold;
  text-align: center;
  margin: 0 5px 0 0;
  color: ${fontColors.bahamaBlue};
`;

const Image = styled.div`
  ${getMediaquery('sm')} {
    width: 100%;
    height: 249px;
    border-radius: 20px;
    margin-bottom: 20px;
  }
`;

const Icon = styled.img`
  position: absolute;
  bottom: 0px;
  width: 88px;
  height: 88px;
`;

const Header = styled.div`
  position: relative;
  margin-bottom: 10px;
`;
const RatingWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Title = styled.h4`
  ${getFont('title')}
  margin: 0;
`;

const Padding = styled.div`
  padding: 0 9px 25px 20px;
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
