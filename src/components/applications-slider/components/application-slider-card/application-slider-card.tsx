import { FC } from 'react';
import styled from '@emotion/styled';

import { ApplicationCardProps } from '../../applications-slider';

import { getMediaquery } from '../../../../utils/utils';
import newIcon from '../../../../assets/application-slider/new_icon.svg';
import thumbUp from '../../../../assets/application-slider/thumb_up.svg';
import { fontColors } from '../../../../styles/mixins/colors';

export const ApplicationSliderCard: FC<ApplicationCardProps> = ({
  icon,
  title,
  subtitle,
  mark,
}) => {
  const markSetter = (mark: string) => {
    if (!mark) {
      return;
    }
    if (mark === 'new') {
      return newIcon;
    }
    if (mark === 'favorite' || 'popular') {
      return thumbUp;
    }
  };

  return (
    <Card>
      <Header>
        {mark ? <Mark src={markSetter(mark)} /> : null}

        <Icon src={icon} alt={title} />
        <Title>{title}</Title>
      </Header>
      <Subtitle>{subtitle}</Subtitle>
    </Card>
  );
};

const Card = styled.div`
  width: 350px;
  position: relative;
  user-select: none;
  height: 180px;
  box-shadow: 0 0 30px rgba(0, 102, 255, 0.15);
  box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px 0 26px 13px;
  border-radius: 20px;
  margin-bottom: 50px;

  ${getMediaquery('sm')} {
    width: 335px;
    margin-left: 0;
    margin-bottom: 0;
    margin-top: 30px;

    :nth-of-type(1){
      margin-top: 0;
    }
    :nth-of-type(2) {
      height: 180px;
    }
    :nth-of-type(even) {
      margin-right: 0;
    }
    :nth-last-of-type(1) {
      margin-bottom: 45px;
    }
  }

  ${getMediaquery('md')} {
    margin-left: 0;
    margin-bottom: 30px;
    margin-right: 30px;
    margin-top: 0;
    :nth-of-type(2) {
      height: 180px;
    }
    :nth-last-of-type(1),
    :nth-last-of-type(2) {
      margin-bottom: 45px;
    }
  }
  ${getMediaquery('lg')} {
    width: 350px;

    margin-right: 0;
    height: 180px;
    :nth-last-of-type(1),
    :nth-last-of-type(2) {
      margin-bottom: 0px;
    }
    :nth-of-type(2) {
      height: 180px;
      transform: translate(-50%, 0);
      margin-left: 0;
      margin-bottom: 0;
    }
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 11px;
`;
const Mark = styled.img`
  width: 23px;
  height: 42px;
  position: absolute;
  border: 0;
  top: 0;
  right: 25px;
`;

const Title = styled.h4`
  max-width: 180px;
  margin: 0;
  font-weight: bold;
  color: ${fontColors.chathamsBlue};
  font-weight: bold;
  text-align: left;
  font-size: 20px;
  line-height: 120%;
`;

const Subtitle = styled.p`
  max-width: 300px;
  color: ${fontColors.chathamsBlue};
  padding-left: 8px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 130%;
  opacity: 0.4;
  margin: 0;
`;

const Icon = styled.img`
  margin-right: 19px;
`;
