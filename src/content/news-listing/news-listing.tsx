import { useState, useEffect, ChangeEvent } from 'react';
import styled from '@emotion/styled';
import Pagination from '@material-ui/lab/Pagination';

import { Header } from '../../components/articles-block-header';
import { ArticleSidebar } from '../../components/article-sidebar';
import { Banner, BannerProps } from '../../components/banner';
import { NewsCard } from '../../components/news-card/news-card-basic';
import { CardsProps } from '../../components/news-card/types';
import { NewsCardMain } from '../../components/news-card/news-card-main';
import { If } from '../../components/shared/if';
import { LinkButtonRounded } from '../../components/link-button/link-button-rounded';
import { sideBarNews } from '../../components/article-sidebar/data';

import { breakpoints } from '../../utils/constants';
import { sortObjectsByDate } from '../../utils/utils';
import { getMediaquery } from '../../styles';

export interface NewsListingProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  cards: CardsProps[],
  banner?: BannerProps,
  title?: string,
}

export function NewsListing({
  cards,
  banner,
  title = 'Интересно и полезно',
  ...props
}: NewsListingProps) {
  const [currentTab, setCurrentTab] = useState<typeof cards>(cards);
  const [width, setWidth] = useState(window.innerWidth);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = width < breakpoints.tablet;
  const isTablet = width >= breakpoints.tablet && width < breakpoints.desktop;
  const isDesktop = width >= breakpoints.desktop;

  const sortedCards = cards.sort(sortObjectsByDate);
  const totalCards = currentTab.length > 0 ? currentTab.length : 1;
  const cardsPerPageLimit = 7;
  const totalPages = Math.ceil(totalCards / cardsPerPageLimit);

  const renderBasicCard = (card: CardsProps) => (
    <NewsCard
      key={Math.random()}
      imageSrc={card.imageSrc}
      title={card.title}
      subtitle={card.subtitle}
      date={card.date}
    />
  );

  const renderBanner = () => (
    banner &&
    <StyledBanner
      title={banner.title}
      subtitle={banner.subtitle}
      linkText={banner.linkText}
      href={banner.href}
      mainImage={banner.mainImage}
      iconImage={banner.iconImage}
      withSpots={banner.withSpots}
    />
  );

  const renderSidebar = () => (
    <StyledSidebar
      discussionLink='/'
      size='small'
      news={sideBarNews}
    />
  );

  const renderCardsMobile = () => (
    <>
      {currentTab.slice(1, 2).map(renderBasicCard)}
      {renderSidebar()}
      {currentTab.slice(2, 5).map(renderBasicCard)}
      {renderBanner()}
      {currentTab.slice(5).map(renderBasicCard)}
    </>
  );

  const renderCardsTablet = () => {
    if (page === 1) {
      return (<>
        {currentTab.slice(1, 3).map(renderBasicCard)}
        {renderBanner()}
        {renderSidebar()}
        {currentTab.slice(3, cardsPerPageLimit).map(renderBasicCard)}
      </>);
    } else {
      return currentTab
        .slice((page - 1) * cardsPerPageLimit, page * cardsPerPageLimit)
        .map(renderBasicCard);
    }
  };

  const renderCardsDesktop = () => {
    if (page === 1) {
      return(<>
        {currentTab.slice(1, 5).map(renderBasicCard)}
        {renderBanner()}
        {currentTab.slice(5, cardsPerPageLimit).map(renderBasicCard)}
      </>);
    } else {
      return currentTab
        .slice((page - 1) * cardsPerPageLimit, page * cardsPerPageLimit)
        .map(renderBasicCard);
    }
  };

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Wrapper {...props}>
      <StyledHeader
        title={title}
        cards={sortedCards}
        setCurrentTab={setCurrentTab}
        setPage={setPage}
      />
      <CardsWrapper>
        {page === 1 && currentTab.slice(0, 1).map((card) => (
          <StyledMainCard
            key={Math.random()}
            imageSrc={card.imageSrc}
            title={card.title}
            subtitle={card.subtitle}
            date={card.date}
          />
        ))}
        <If condition={isMobile}>{renderCardsMobile()}</If>
        <If condition={isTablet}>{renderCardsTablet()}</If>
        <If condition={isDesktop}>{renderCardsDesktop()}</If>
      </CardsWrapper>
      <If condition={!isMobile && totalPages !== 1}>
        <StyledPagination
          count={totalPages}
          page={page}
          onChange={handleChange}
        />
        <LinkButtonRounded
          platform='text'
          length='regular'
          colors='white'
          text='Показать еще'
        />
      </If>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;

  ${getMediaquery('md')} {
    grid-template-columns: 1fr 170px;
    grid-column-gap: 130px;
    max-width: 730px;
    margin: 0 auto;
  }

  ${getMediaquery('lg')} {
    max-width: 855px;
    margin: 0;
  }
`;

const StyledHeader = styled(Header)`
  margin-bottom: 40px;

  ${getMediaquery('md')} {
    grid-column: 1 / -1;
  }

  ${getMediaquery('lg')} {
    margin-bottom: 30px;
  }
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-row-gap: 40px;
  overflow: hidden;

  ${getMediaquery('sm')} {
    justify-items: center;
  }

  ${getMediaquery('md')} {
    grid-column: 1 / -1;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 40px;
    justify-items: stretch;
    margin-bottom: 60px;
  }

  ${getMediaquery('lg')} {
    grid-row-gap: 45px;
  }
`;

const StyledMainCard =styled(NewsCardMain)`
  ${getMediaquery('md')} {
    grid-column: 1 / -1;
  }
`;

const StyledSidebar = styled(ArticleSidebar)`
  justify-self: stretch;

  ${getMediaquery('md')} {
    grid-column: 1 / -1;
  }
`;

const StyledBanner = styled(Banner)`
  ${getMediaquery('md')} {
    grid-column: 1 / -1;
  }

  ${getMediaquery('lg')} {
    margin-bottom: -20px;
  }
`;

const StyledPagination = styled(Pagination)`
  .MuiPagination-ul {
    padding-left: 30px;

    .MuiPaginationItem-page {
      font-family: var(--font-families-ubuntu);
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0.7px;
      color: #1B8EFF;
    }

    li:first-of-type .MuiPaginationItem-page,
    li:last-of-type .MuiPaginationItem-page {
      color: #323232;
      opacity: 0.3;
    }

    .MuiPaginationItem-page.Mui-selected {
      background: none;
      color: #2D2C46;
    }
  }
`;
