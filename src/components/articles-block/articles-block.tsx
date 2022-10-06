import { FC, useState, useEffect } from 'react';
import styled from '@emotion/styled';

import { CardsProps } from '../news-card/types';
import { Header } from '../articles-block-header';
import { ArticlesDesktopBody } from './components/articles-desktop-body';
import { ArticlesTabletBody } from './components/articles-tablet-body';

import { breakpoints } from '../../utils/constants';
import { sortObjectsByDate } from '../../utils/utils';
import { getMediaquery } from '../../styles/mixins/mediaqueries';

export interface ArticlesBlockPropsInterface {
  cards: CardsProps[];
  title?: string;
}

export const ArticlesBlock: FC<ArticlesBlockPropsInterface> = ({ cards, title = 'Интересно и полезно' }) => {
  const [currentTab, setCurrentTab] = useState(cards);
  const [width, setWidth] = useState(window.innerWidth);

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

  const renderArticlesBlock = () => {
    if (isMobile || isTablet) {
      return <ArticlesTabletBody cards={currentTab} />;
    } else if (isDesktop) {
      return <ArticlesDesktopBody cards={currentTab} />;
    }
  };

  return (
    <Wrapper>
      <StyledHeader
        title={title}
        setCurrentTab={setCurrentTab}
        cards={sortedCards}
      />
      {renderArticlesBlock()}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  ${getMediaquery('md')} {
    max-width: 728px;
    margin: 0 auto;
  }

  ${getMediaquery('lg')} {
    max-width: 1260px;
    margin: 172px auto;
  }
`;

const StyledHeader = styled(Header)`
  margin-bottom: 20px;

  ${getMediaquery('md')} {
    margin-bottom: 30px;
  }

  ${getMediaquery('lg')} {
    margin-bottom: 40px;
  }
`;
