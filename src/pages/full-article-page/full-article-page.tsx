import { FC } from 'react';
import styled from '@emotion/styled';

import { Article, ArticleSidebar } from '../../components';
import Logo from '../../storybook/icons/logo.svg';
import { thirdPartyLinksAuth } from '../../content/authorization/data';
import { socials } from '../../components/social-media-list/data';
import {
  generalPartners,
  alsoPartners,
} from '../../components/partners-list/data';
import { headerPagesList } from '../../layouts/header/data';
import { footerPagesList, footerCopyright } from '../../layouts/footer/data';
import { MainLayout } from '../../layouts/main-layout';
import { Header } from '../../layouts/header';
import { Footer } from '../../layouts/footer';
import { sideBarNews } from '../../components/article-sidebar/data';
import {
  fullArticle,
  socialNetworks,
} from '../../components/full-article/data';
import { services } from '../../components/popular-services/data';

export const FullArticlePage: FC = () => {
  return (
    <MainLayout
      header={
        <Header
          icon={Logo}
          currentPage='Новости'
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
      sidebar={
        <ArticleSidebar
          news={sideBarNews}
          discussionLink='/'
          size='regular'
        />
      }
    >
      <StyledArticle
        article={fullArticle}
        services={services}
        socialNetworks={socialNetworks}
      />
    </MainLayout>
  );
};

const StyledArticle = styled(Article)`
  margin-bottom: 160px;
`;
