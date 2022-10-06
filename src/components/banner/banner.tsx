import { FC } from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { getFont } from '../../styles/mixins/fonts';
import { getMediaquery } from '../../styles/mixins/mediaqueries';
import { ifProp } from '../../lib/if-prop';

export interface BannerProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  subtitle: string;
  linkText: string;
  href: string;
  mainImage: string;
  iconImage: string;
  withSpots?: boolean;
}

export const Banner: FC<BannerProps> = ({
  title,
  subtitle,
  linkText,
  href,
  mainImage,
  iconImage,
  withSpots,
  ...props
}) => {
  return (
    <Wrapper withSpots={withSpots} {...props}>
      <MainContent>
        <Header>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </Header>

        <ContentNavigation>
          <LinkText href={href}>{linkText}</LinkText>
          <BottomIconComponent src={iconImage} alt='bottom_icon' />
        </ContentNavigation>
      </MainContent>
      <MainImage src={mainImage} alt='image' />
    </Wrapper>
  );
};

const Wrapper = styled.div<{ withSpots?: boolean }>`
  align-self: center;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
  padding-top: 50px;
  padding-right: 20px;
  padding-bottom: 35px;
  padding-left: 20px;
  border-radius: 20px;
  background-color: var(--colors-white);

  ${ifProp('withSpots',
    css`
      position: relative;

      &::before {
        content: '';
        position: absolute;
        top: -130px;
        right: -150px;
        bottom: -190px;
        left: -130px;
        display: block;
        background-image:
          radial-gradient(50% 50% at 50% 50%, rgba(255, 173, 222, 0.5) 0%, rgba(249, 111, 252, 0) 100%),
          radial-gradient(50% 50% at 50% 50%, #ADECF0 0%, rgba(120, 252, 244, 0) 100%),
          radial-gradient(50% 50% at 50% 50%, rgba(68, 165, 255, 0.8) 0%, rgba(158, 191, 255, 0) 100%);
        background-size:
          475px 450px,
          560px 560px,
          600px 490px;
        background-position:
          10px 10px,
          calc(50% + 70px) calc(50% - 100px),
          50% calc(50% + 100px);
        background-repeat: no-repeat;
        z-index: -1;

        ${getMediaquery('md')} {
          top: -135px;
          right: -135px;
          bottom: -105px;
          left: -135px;
          background-size:
            455px 435px,
            605px 540px,
            505px 465px;
          background-position:
            10px 50%,
            calc(50% - 70px) 50%,
            calc(50% + 250px) 50%;
        }

        ${getMediaquery('lg')} {
          top: -180px;
          right: -270px;
          bottom: -125px;
          left: -228px;
          background-size:
            615px 590px,
            825px 735px,
            690px 635px;
          background-position:
            10px 50%,
            calc(50% - 70px) 50%,
            calc(50% + 250px) 50%;
        }
      }
    `,
  )}

  ${getMediaquery('sm')} {
    width: 335px;
    padding: 20px;
  }

  ${getMediaquery('md')} {
    width: 730px;
    height: 300px;
    padding: 30px 20px 30px 30px;
    justify-content: space-between;
    flex-direction: row;
  }

  ${getMediaquery('lg')} {
    position: relative;
    justify-content: space-between;
    width: 100%;
    width: 855px;
    height: 440px;
    padding: 25px 35px 40px 55px;
    margin-bottom: 83px;
    color: #195084;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const MainImage = styled.img`
  width: 240px;
  margin-bottom: 20px;

  ${getMediaquery('sm')} {
    width: 295px;
  }

  ${getMediaquery('md')} {
    margin-bottom: 0;
  }

  ${getMediaquery('lg')} {
    max-width: 448px;
  }
`;

const BottomIconComponent = styled.img`
  width: calc((100% - 10px)/2);
  align-self: flex-start;

  ${getMediaquery('md')} {
    position: static;
    width: 165px;
  }

  ${getMediaquery('lg')} {
    width: auto;
    max-width: 180px;
  }
`;

const LinkText = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc((100% - 10px)/2);
  height: 100%;
  padding: 4px 13px;
  font-size: 14px;
  color: white;
  text-decoration: none;
  border-radius: 10px;
  background: var(--colors-blue);

  ${getMediaquery('sm')} {
    padding: 15px 13px;
  }

  ${getMediaquery('md')} {
    align-self: center;
    justify-content: flex-start;
    width: auto;
    max-width: 305px;
    height: auto;
    margin-left: 35px;
    margin-bottom: 0;
    padding: 0;
    font-size: 16px;
    line-height: 120%;
    font-weight: 600;
    color: var(--colors-blue);
    background: none;
  }

  ${getMediaquery('lg')} {
    margin-bottom: 94px;
    margin-left: 0;
    align-self: baseline;
  }
`;

const ContentNavigation = styled.div`
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  align-self: center;

  ${getMediaquery('md')} {
    align-self: flex-start;
    justify-content: flex-start;
  }

  ${getMediaquery('lg')} {
    max-width: 100%;
    flex-direction: column;
    align-items: left;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 245px;
  align-self: center;
  margin-bottom: 20px;

  ${getMediaquery('sm')} {
    width: 295px;
  }

  ${getMediaquery('md')} {
    max-width: 100%;
    margin-bottom: 60px;
    align-self: flex-start;
  }

  ${getMediaquery('lg')} {
    margin-bottom: 32px;
  }
`;

const Title = styled.h2`
  ${getFont('title')};
  max-width: 295px;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 24px;
  text-align: center;

  ${getMediaquery('md')} {
    max-width: 350px;
    font-size: 50px;
    line-height: 100%;
    font-style: normal;
    font-weight: bold;
    text-align: left;
    color: #195084;
  }

  ${getMediaquery('lg')} {
    margin-bottom: 20px;
  }
`;

const Subtitle = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 120%;
  color: #195084;
  text-align: center;

  ${getMediaquery('md')} {
    font-size: 16px;
    font-size: 16px;
    text-align: left;
  }
`;
