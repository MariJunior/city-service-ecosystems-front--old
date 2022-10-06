import styled from '@emotion/styled';

import Logo from '../../storybook/icons/logo.svg';
import { MainLayout } from '../../layouts/main-layout';
import { Header } from '../../layouts/header';
import { Footer } from '../../layouts/footer';
import { ArticleSidebar } from '../../components/article-sidebar';
import { NewsListing } from '../../content/news-listing';
import { headerPagesList } from '../../layouts/header/data';
import { footerPagesList, footerCopyright } from '../../layouts/footer/data';
import { thirdPartyLinksAuth } from '../../content/authorization/data';
import { sideBarNews } from '../../components/article-sidebar/data';
import { socials } from '../../components/social-media-list/data';
import { generalPartners, alsoPartners } from '../../components/partners-list/data';
import { news, newsListingBanner } from '../../content/news-listing/data';
import { getMediaquery } from '../../styles';

export function ListingNewsArticles() {
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
      sidebar={
        <ArticleSidebar
          news={sideBarNews}
          discussionLink='/'
          size='regular'
        />
      }
    >
      <StyledNewsListing
        cards={news}
        banner={newsListingBanner}
      />
    </MainLayout>
  );
}


const StyledNewsListing = styled(NewsListing)`
  margin-bottom: 60px;

  ${getMediaquery('md')} {
    margin-bottom: 40px;
  }

  ${getMediaquery('lg')} {
    margin-bottom: 70px;
  }
`;
