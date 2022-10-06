import { FC } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { CatalogLinksList } from '../../../../../../../catalog-links-list';

import { RatingComponent } from '../../../../../../../../rating/rating-component';

import { switchProp } from '../../../../../../../../../lib';
import {
  getMediaquery,
  getFont,
  fontColors,
} from '../../../../../../../../../styles';

import { TabletLink, LinkProps, CardTypeProps } from '../../../../../../types';

export interface HeaderProps {
  title: string;
  icon: string;
  reviewsCount: number;
  rating: number;
  tabletLinks: TabletLink[];
  link: LinkProps;
  type: CardTypeProps;
}

export const Header: FC<HeaderProps> = ({
  title,
  icon,
  rating,
  reviewsCount,
  tabletLinks,
  link,
  type,
}) => {
  const isPrimary = type === 'primary' ? false : true;

  return (
    <Wrapper type={type}>
      <Title type={type}>{title}</Title>
      <MobileImage src={icon} alt={title} />
      <MobileTitleWrapper>
        <MobileTitle>{title}</MobileTitle>
        <RatingComponent rating={rating} reviewsCount={reviewsCount} />
      </MobileTitleWrapper>
      <CatalogLinksList
        interestedCard={isPrimary}
        mobile={false}
        links={tabletLinks}
      />
      <HeaderLink type={type} href={link.href}>
        {link.text}
      </HeaderLink>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ type: string }>`
  display: flex;
  margin: 0;
  ${getMediaquery('sm')} {
    flex-direction: row;
  }
  ${getMediaquery('md')} {
    flex-direction: column;
  }
  ${getMediaquery('lg')} {
    ${switchProp('type', {
      primary: css`
        align-items: center;
        flex-direction: row;
      `,
      secondary: css`
        align-items: flex-start;
        flex-direction: column;
      `,
    })}
  }
`;
const MobileTitleWrapper = styled.div`
  ${getMediaquery('sm')} {
    display: flex;
    flex-direction: column;
  }
  ${getMediaquery('md')} {
    display: none;
  }
`;

const MobileImage = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 10px;
  ${getMediaquery('md')} {
    display: none;
  }
`;

const Title = styled.h3<{ type: string }>`
  ${getFont('title')};
  color: ${fontColors.chathamsBlue};
  margin: 0;
  ${getMediaquery('sm')} {
    display: none;
  }
  ${getMediaquery('md')} {
    display: block;
    margin-bottom: 7px;
    margin-right: 0;
  }

  ${getMediaquery('lg')} {
    ${switchProp('type', {
      primary: css`
        margin-right: 10px;
        margin-bottom: 0;
      `,
      secondary: css`
        margin-bottom: 10px;
      `,
    })}
  }
`;

const MobileTitle = styled.h3`
  ${getFont('title')};
  color: ${fontColors.chathamsBlue};
  font-size: 14px;
  margin: 0;
  margin-bottom: 3px;

  ${getMediaquery('md')} {
    display: none;
  }
`;
const HeaderLink = styled.a<{ type: string }>`
  ${getFont('medium')};
  color: ${fontColors.cornFlowerBlue};
  font-weight: bold;
  margin: 0;
  text-decoration: none;
  ${getMediaquery('sm')} {
    display: none;
  }
  ${getMediaquery('lg')} {
    ${switchProp('type', {
      primary: css`
        display: block;
      `,
      secondary: css`
        display: none;
      `,
    })}
  }
`;
