import { FC } from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { NewsFullProps, SizeProp } from '../../types';

import { switchProp } from '../../../../lib/switch-prop';
import { getFont } from '../../../../styles/mixins/fonts';
import { getMediaquery } from '../../../../styles';

export const NewsCard: FC<NewsFullProps> = ({ link, title, date, size }) => {
  return (
    <Card size={size}>
      <Title href={link} size={size}>{title}</Title>
      <Date size={size}>{date}</Date>
    </Card>
  );
};

const Card = styled.div<{ size: SizeProp }>`
    display: flex;
    flex-direction: column;

    ${switchProp('size', {
    small: css`
      min-width: 245px;
      padding: 15px;
      margin-top: 20px;
      margin-right: 10px;
      margin-bottom: 20px;
      border-radius: 10px;
      box-shadow: 0px 0px 20px #D8E8FF;
      background-color: var(--colors-white);

      &:last-of-type {
        margin-right: 0;
      }

      ${getMediaquery('md')} {
        min-width: 275px;
        height: fit-content;
      }
    `,
    regular: css`
      width: 100%;
      margin-bottom: 30px;

      &:last-of-type {
        margin-bottom: 0;
      }
    `,
  })}
`;

const Title = styled.a<{ size: SizeProp }>`
  color: var(--colors-blue);
  margin-bottom: 5px;
  text-decoration: none;

  ${switchProp('size', {
    small: css`
      font-family: var(--font-families-gilroy);
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 17px;

      ${getMediaquery('md')} {
        font-size: 16px;
        line-height: 19px;
      }
    `,
    regular: css`
      ${getFont('medium')};
      font-weight: bold;
      font-size: 18px;
    `,
  })}
`;

const Date = styled.time<{ size: SizeProp }>`
  ${getFont('medium')};
  color: var(--colors-darkblue);
  opacity: 0.5;

  ${switchProp('size', {
    small: css`
      font-size: 12px;
      line-height: 16px;

      ${getMediaquery('md')} {
        font-size: 14px;
        line-height: 18px;
      }
    `,
    regular: css`
      font-size: 14px;
    `,
  })}
`;
