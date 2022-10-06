import { FC } from 'react';
import styled from '@emotion/styled';
import 'swiper/swiper-bundle.css';

import { SlideProps } from '../../slider';

import LinkIconImage from '../../../../assets/link_icon.svg';
import { getFont } from '../../../../styles/mixins/fonts';
import { getMediaquery } from '../../../../styles/mixins/mediaqueries';
import { fontColors } from '../../../../styles/mixins/colors';

export const Slide: FC<SlideProps> = ({
  title,
  subtitle,
  linkInformation,
  mainImage,
  bottomIcon,
}) => {
  return (
    <div className='swiper-slide'>
      <SwiperContent>
        <MainContent>
          <div>
            <SwiperTitle>{title}</SwiperTitle>
            <SwiperSubtitle>{subtitle}</SwiperSubtitle>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <ContentNavigation href={linkInformation.href}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <LinkText>{linkInformation.text}</LinkText>
                <LinkIcon />
              </div>
              <BottomIconComponent src={bottomIcon} alt='bottom_icon' />
            </ContentNavigation>
          </div>
        </MainContent>
        <MainImage src={mainImage} alt='image' />
      </SwiperContent>
    </div>
  );
};

const SwiperContent = styled.div`
  width: 100%;

  ${getMediaquery('sm')} {
    padding: 38px 20px 35px 20px;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
  }

  ${getMediaquery('md')} {
    padding: 30px;
    flex-direction: row;
    justify-content: space-between;
  }

  ${getMediaquery('lg')} {
    padding: 80px;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;

  ${getMediaquery('md')} {
    justify-content: space-between;
  }
  ${getMediaquery('lg')} {
    justify-content: flex-start;
  }
`;

const MainImage = styled.img`
  ${getMediaquery('sm')} {
    max-width: 335px;
    position: relative;
    margin: 0 auto 26px;
    max-width: 100%;
    height: 268px;
  }

  ${getMediaquery('md')} {
    margin: 0;
    max-width: 400px;
    height: auto;
  }
`;

const BottomIconComponent = styled.img`
  width: 60px;
  height: 50px;
  max-width: 200px;
  align-self: flex-start;
`;

const LinkText = styled.p`
  ${getMediaquery('sm')} {
    max-width: 139px;
    height: 50px;
    display: flex;
    align-items: center;
    font-size: 14px;
    padding: 0 13px 0 13px;
    background: ${fontColors.dodgerBlue};
    border-radius: 10px;
    color: white;
    margin-right: 0px;
  }

  ${getMediaquery('md')} {
    background: none;
    max-width: 305px;
    border-radius: 0;
    padding: 0;
    font-weight: 600;
    font-size: 16px;
    line-height: 120%;
    color: ${fontColors.dodgerBlue};
    text-decoration: none;
  }
  ${getMediaquery('lg')} {
    margin-right: 12px;
  }
`;

const ContentNavigation = styled.a`
  height: 100%;
  text-decoration: none;

  ${getMediaquery('sm')} {
    position: relative;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: flex-start;
    text-decoration: none;
  }

  ${getMediaquery('md')} {
    max-width: 343px;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
  }

  ${getMediaquery('lg')} {
    width: 100%;
    flex-direction: column;
    flex-basis: 180px;
    align-items: flex-start;
  }
`;

const SwiperTitle = styled.h2`
  ${getFont('title')};
  font-style: normal;
  font-weight: bold;
  color: ${fontColors.chathamsBlue};
  line-height: 100%;

  ${getMediaquery('sm')} {
    font-size: 24px;
    text-align: center;
    margin-bottom: 10px;
  }

  ${getMediaquery('md')} {
    font-size: 50px;
    text-align: left;
    margin: 0 0 20px 0;
  }

  ${getMediaquery('lg')} {
    margin: 0 0 32px 0;
  }
`;

const SwiperSubtitle = styled.p`
  line-height: 120%;
  color: ${fontColors.chathamsBlue};

  ${getMediaquery('sm')} {
    font-size: 14px;
    margin-bottom: 20px;
    text-align: center;
  }

  ${getMediaquery('md')} {
    font-size: 16px;
    text-align: left;
    margin: 0;
  }
  ${getMediaquery('lg')}{
    margin-bottom: 23px;
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

const LinkIcon = styled(Button)`
  background-image: url(${LinkIconImage});
  width: 25px;
  height: 25px;

  ${getMediaquery('sm')} {
    display: none;
  }

  ${getMediaquery('lg')} {
    display: block;
  }
`;
