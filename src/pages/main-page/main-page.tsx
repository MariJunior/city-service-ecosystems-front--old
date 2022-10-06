import { FC } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

import { MainLayout } from '../../layouts/main-layout';
import { Header } from '../../layouts/header';
import { Footer } from '../../layouts/footer';
import { headerPagesList } from '../../layouts/header/data';
import { footerPagesList, footerCopyright } from '../../layouts/footer/data';
import Logo from '../../storybook/icons/logo.svg';
import { thirdPartyLinksAuth } from '../../content/authorization/data';
import { socials } from '../../components/social-media-list/data';
import {
  generalPartners,
  alsoPartners,
} from '../../components/partners-list/data';
import { Slider } from '../../components/slider';
import { testSlidesArray } from '../../components/slider/data';
import { SocialRoles } from '../../components/social-roles';
import { mainSocialBtnsArray } from '../../components/social-roles/data';
import { InformationBlock } from '../../components/information-block';
import { informationBlockArray } from '../../components/information-block/data';
import { ApplicationsSlider } from '../../components/applications-slider/applications-slider';
import { ApplicationBlockArray } from '../../components/applications-slider/data';
import { ArticlesBlock } from '../../components/articles-block';
import { data } from '../../components/articles-block/data';
import { getMediaquery } from '../../styles/mixins/mediaqueries';

export const MainPage: FC = () => {
  return (
    <MainLayout
      header={
        <Header
          icon={Logo}
          currentPage='Каталог сервисов'
          pages={headerPagesList}
          authRecoveryLink='#'
          authGosuslugi='#'
          authThirdPartyLinks={thirdPartyLinksAuth}
        />
      }
      footer={
        <Footer
          pagesList={footerPagesList}
          socialMediaList={socials}
          generalPartnersList={generalPartners}
          otherPartnersList={alsoPartners}
          copyright={footerCopyright}
        />
      }
    >
      <Wrapper>
        <Slider slides={testSlidesArray} />
        <InformationBlock informationCards={informationBlockArray} />
        <BlueSphere />
        <PinkSphere />
      </Wrapper>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <SocialRoles socialRolesArray={mainSocialBtnsArray} />
      </div>

      <ApplicationsSlider slides={ApplicationBlockArray} />
      <ArticlesBlock cards={data} />
    </MainLayout>
  );
};

const FadeAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1
  }
  `;

const Wrapper = styled.div`
  position: relative;
  min-height: 440px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;

  ${getMediaquery('sm')} {
    align-items: center;
    flex-direction: column;
    margin-bottom: 63px;
    overflow: hidden;
  }

  ${getMediaquery('lg')} {
    flex-direction: row;
    margin-bottom: 100px;
    overflow: visible;
  }
`;

const BlueSphere = styled.div`
  position: absolute;
  width: 615px;
  height: 569px;
  opacity: 0.8;
  animation: ${FadeAnimation} ease infinite;
  z-index: -1;
  background: radial-gradient(
    50% 50% at 53% 50%,
    #44a5ff 0,
    rgba(158, 191, 255, 0) 100%
  );

  ${getMediaquery('sm')} {
    bottom: -5%;
  }

  ${getMediaquery('md')} {
    top: -5%;
    right: -5%;
  }

  ${getMediaquery('lg')} {
    top: 2%;
    right: 60%;
  }
`;

const PinkSphere = styled.div`
  position: absolute;
  width: 615px;
  height: 569px;
  opacity: 0.8;
  animation: ${FadeAnimation} ease infinite;
  z-index: -1;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(255, 173, 222, 0.5) 0,
    rgba(249, 111, 252, 0) 100%
  );

  ${getMediaquery('sm')} {
    top: -15%;
    left: -50%;
  }

  ${getMediaquery('md')} {
    top: -5%;
    left: -10%;
  }

  ${getMediaquery('lg')} {
    top: 2%;
    left: 50%;
  }
`;
