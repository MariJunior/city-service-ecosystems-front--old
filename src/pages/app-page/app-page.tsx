import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import { getMediaquery } from '../../styles/mixins/mediaqueries';

import Logo from '../../storybook/icons/logo.svg';
import { MainLayout } from '../../layouts/main-layout';
import { Header } from '../../layouts/header';
import { Footer } from '../../layouts/footer';
import { CardDetailed } from '../../components/cards/card-detailed';
import { headerPagesList } from '../../layouts/header/data';
import { footerPagesList, footerCopyright } from '../../layouts/footer/data';
import { thirdPartyLinksAuth } from '../../content/authorization/data';
import { AppCardBasicProps } from '../../components/cards/types';
import { socials } from '../../components/social-media-list/data';
import { generalPartners, alsoPartners } from '../../components/partners-list/data';
import { appLinksEkpspb, appDetailsEkpspb } from '../../components/cards/card-detailed/data';

export interface AppPageProps extends AppCardBasicProps {
  appSummary: string,
}

export function AppPage({
  appIcon,
  appName,
  appSummary,
  appRating
}: AppPageProps) {
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
      <StyledBreadcrumbs separator={<NavigateNextIcon />} aria-label='Хлебные крошки для страницы приложения'>
        <ParentBreadcrumb href='#'>Приложения</ParentBreadcrumb>
        <EndpointCrumb>{appName}</EndpointCrumb>
      </StyledBreadcrumbs>

      <StyledCardDetailed
        appIcon={appIcon}
        appName={appName}
        appSummary={appSummary}
        appRating={appRating}
        appLinks={appLinksEkpspb}
        appDetails={appDetailsEkpspb}
      />
    </MainLayout>
  );
}

const StyledBreadcrumbs = styled(Breadcrumbs)`
  .MuiBreadcrumbs-ol {
    margin: 0 auto;
    max-width: calc(var(--breakpoints-lg) - 40px);
    margin-bottom: 35px;

    ${getMediaquery('lg')} {
      margin-bottom: 115px;
    }
  }

  .MuiBreadcrumbs-separator {
    margin-right: 10px;
    margin-left: 10px;
    color: var(--colors-darkblue);

    ${getMediaquery('md')} {
      margin-right: 30px;
      margin-left: 30px;
    }
  }
`;

const breadcrumbsBase = css`
  font-family: var(--font-families-ubuntu);
  font-size: 16px;
  line-height: 19px;
  color: var(--colors-blue);
`;

const ParentBreadcrumb = styled(Link)`
  ${breadcrumbsBase};

  &:hover {
    opacity: 0.6;
  }

  &:visited {
    color: var(--colors-blue);
  }
`;

const EndpointCrumb = styled(Typography)`
  ${breadcrumbsBase};
`;

const StyledCardDetailed = styled(CardDetailed)`
  margin-bottom: 100px;

  ${getMediaquery('md')} {
    margin-bottom: 150px;
  }

  ${getMediaquery('lg')} {
    margin-bottom: 225px;
  }
`;
