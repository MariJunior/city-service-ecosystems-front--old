import { FC } from 'react';
import styled from '@emotion/styled';

import { getFont } from '../../../../styles/mixins/fonts';
import { getMediaquery } from '../../../../styles/mixins/mediaqueries';

export interface MainArticlesCardProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  subtitle: string;
  date: string;
  image: string;
}

export const MainArticlesCard: FC<MainArticlesCardProps> = ({
  title,
  subtitle,
  date,
  image,
  ...props
}) => {
  return (
    <Article style={{ backgroundImage: `url(${image})` }} {...props}>
      <Content>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Date dateTime={date}>{date}</Date>
      </Content>
    </Article>
  );
};

const Article = styled.div<{ background?: string }>`
  display: flex;
  width: 280px;
  background-position: center;
  background-size: cover;
  position: relative;
  box-sizing: border-box;
  border-radius: 20px;
  padding: 140px 20px 20px 20px;
  align-items: flex-end;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background: linear-gradient(
      180.13deg,
      rgba(89, 156, 246, 0) 0.11%,
      rgba(89, 156, 246, 0.0697674) 19.49%,
      #1b8eff 71.03%
    );
    z-index: 5;
  }

  ${getMediaquery('sm')} {
    width: 335px;
  }

  ${getMediaquery('md')} {
    width: 728px;
    padding: 94px 30px 30px 30px;
    align-items: center;
  }

  ${getMediaquery('lg')} {
    width: 615px;
    padding: 250px 30px 30px 30px;
    align-items: flex-end;
  }
`;

const Content = styled.div`
  z-index: 6;

  ${getMediaquery('sm')} {
    width: 295px;
  }

  ${getMediaquery('md')} {
    width: 366px;
  }

  ${getMediaquery('lg')} {
    width: 555px;
  }
`;

const Title = styled.h3`
  ${getFont('medium')};
  margin-top: 0;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 16px;
  color: var(--colors-white);

  ${getMediaquery('sm')} {
    width: 295px;
  }

  ${getMediaquery('md')} {
    width: 375px;
    font-size: 30px;
    line-height: 36px;
  }

  ${getMediaquery('lg')} {
    width: 555px;
  }
`;

const Subtitle = styled.p`
  ${getFont('medium')};
  margin-top: 0;
  margin-bottom: 10px;
  opacity: 0.7;
  font-size: 12px;
  line-height: 14px;
  color: var(--colors-white);

  ${getMediaquery('sm')} {
    width: 295px;
  }

  ${getMediaquery('md')} {
    width: 366px;
    margin-bottom: 20px;
  }

  ${getMediaquery('lg')} {
    width: 555px;
  }
`;

const Date = styled.time`
  font-family: var(--font-families-ubuntu);
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: var(--colors-white);
  opacity: 0.5;

  ${getMediaquery('md')} {
    font-size: 14px;
    line-height: 16px;
  }

  ${getMediaquery('lg')} {
    width: 555px;
  }
`;
