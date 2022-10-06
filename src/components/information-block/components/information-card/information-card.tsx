import { FC } from 'react';
import styled from '@emotion/styled';

import { InformationCardProps } from '../../information-block';

import LinkIconImage from '../../../../assets/link_icon.svg';
import { getMediaquery } from '../../../../styles/mixins/mediaqueries';
import { fontColors } from '../../../../styles/mixins/colors';

export const InformationCard: FC<InformationCardProps> = ({
  cardImage,
  title,
  subtitle,
  href,
}) => {
  return (
    <Card>
      <CardImage src={cardImage} alt='image' />
      <TextWrapper>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
        <CardArrowLink as='a' href={href} />
      </TextWrapper>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 0 29px;
  width: 360px;
  min-height: 208px;
  background: ${fontColors.white};
  border-radius: 20px;
  &:last-child {
    margin-bottom: 0;
    margin-right: 0;
  }

  ${getMediaquery('sm')} {
    width: 335px;
    margin-right: 0;
    margin-bottom: 30px;
    padding: 0 0 0 33px;
  }

  ${getMediaquery('md')} {
    width: 349px;
    padding: 0 9px 0 29px;
    margin-bottom: 0;
  }

  ${getMediaquery('lg')} {
    padding: 0 14px 0 29px;
    margin-right: 0;
  }
`;

const CardImage = styled.img`
  width: 100px;
  height: 110px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CardTitle = styled.h2`
  max-width: 180px;
  margin-top: 0;
  margin-bottom: 8px;
  line-height: 100%;
  font-style: normal;
  font-weight: bold;
  color: ${fontColors.chathamsBlue};

  ${getMediaquery('sm')} {
    font-size: 16px;
  }

  ${getMediaquery('md')} {
    font-size: 20px;
  }

  ${getMediaquery('lg')} {
  }
`;

const CardSubtitle = styled.p`
  max-width: 156px;
  font-size: 14px;
  margin: 0;
  line-height: 120%;
  color: ${fontColors.chathamsBlue};
`;

const CardArrowLink = styled.a`
  position: absolute;
  right: 24px;
  bottom: 24px;
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  background-color: transparent;
  background-image: url(${LinkIconImage});
  width: 25px;
  height: 25px;
`;
