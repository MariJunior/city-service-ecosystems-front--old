import { FC, useState, useEffect } from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { ArticleSidebarFullProps, SizeProp } from './types';
import { NewsCard } from './components/news-card';
import vkontakte from '../../assets/vk.svg';

import { getFont } from '../../styles/mixins/fonts';
import { getMediaquery } from '../../styles/mixins/mediaqueries';
import { switchProp } from '../../lib/switch-prop';
import { If } from '../shared/if';

interface ArticleSidebarProps extends ArticleSidebarFullProps, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const ArticleSidebar: FC<ArticleSidebarProps> = ({ news, discussionLink, size, ...props }) => {
  const [sidebarNews, setSidebarNews] = useState<typeof news>([]);

  useEffect(() => {
    setSidebarNews(news);
  }, []);

  const sortedNewsByDate = sidebarNews.sort((a, b) => {
    const firstDate = a.date.slice(0, 2);
    const secondDate = b.date.slice(0, 2);
    if (firstDate < secondDate) {
      return 1;
    }
    return -1;
  });

  const formattedNewsArray = sortedNewsByDate.map((item) => {
    if (item.date.startsWith('0')) {
      return { ...item, date: item.date.replace('0', '') };
    }
    return item;
  });

  return (
    <Sidebar size={size} {...props}>
      <SidebarTitle size={size}>Интересно и полезно</SidebarTitle>
      <If condition={size === 'small'} elseChildren={
        formattedNewsArray.map(({ title, date, link }, index) => (
          <NewsCard
            key={index}
            title={title}
            date={date}
            link={link}
            size={size}
          />
        ))
      }>
        <NewsContainer>
          {formattedNewsArray.map(({ title, date, link }, index) => (
            <NewsCard
              key={index}
              title={title}
              date={date}
              link={link}
              size={size}
            />
          ))}
        </NewsContainer>
      </If>
      <SocialContainer href={discussionLink} size={size}>
        <SocialIconImage src={vkontakte} alt='vkontakte' size={size} />
        <Invite size={size}>Присоединяйтесь к обсуждению социальных ролей</Invite>
      </SocialContainer>
    </Sidebar>
  );
};

interface BasicSizeProps {
  size: SizeProp;
}

const Sidebar = styled.aside<BasicSizeProps>`
  ${switchProp('size', {
    small: css`
      display: grid;

      ${getMediaquery('md')} {
        display: grid;
        grid-template-columns: 250px 1fr;
        grid-template-rows: fit-content 1fr;
      }

      ${getMediaquery('lg')} {
        display: none;
      }
    `,
    regular: css`
      display: none;

      ${getMediaquery('lg')} {
        display: flex;
        max-width: 367px;
        width: 100%;
        text-align: left;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
      }
    `,
  })}
`;

const SidebarTitle = styled.h2<BasicSizeProps>`
  ${switchProp('size', {
    small: css`
      ${getFont('title')};
      margin: 0;

      ${getMediaquery('md')} {
        grid-area: 1 / 1 / 2 / 3;
      }
    `,
    regular: css`
      ${getFont('titleMd')};
      font-size: 24px;
      margin-top: 0;
      margin-bottom: 30px;
    `,
  })}
`;

const NewsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 5px;
  overflow-x: scroll;

  ${getMediaquery('md')} {
    grid-area: 2 / 2 / 3 / 3;
    margin-bottom: 0;
    padding: 0 10px;
  }
`;

const SocialContainer = styled.a<BasicSizeProps>`
  display: flex;
  align-items: center;
  width: 100%;
  text-decoration: none;
  background-color: var(--colors-lightgrey);

  ${switchProp('size', {
    small: css`
      padding: 15px;
      border-radius: 10px;

      ${getMediaquery('md')} {
        grid-area: 2 / 1 / 3 / 2;
        align-self: center;
        height: fit-content;
      }
    `,
    regular: css`
      justify-content: space-between;
      max-width: 296px;
      height: 100px;
      margin-top: 70px;
      padding: 21px 26px;
      border-radius: 20px;
    `,
  })}
`;

const SocialIconImage = styled.img<BasicSizeProps>`
  ${switchProp('size', {
    small: css`
      width: 30px;
      height: 30px;
      margin-right: 10px;

      ${getMediaquery('md')} {
        width: 60px;
        height: 60px;
        margin-right: 15px;
      }
    `,
    regular: css`
      width: 56px;
      height: 56px;
      margin-right: 20px;
    `,
  })}
`;

const Invite = styled.h3<BasicSizeProps>`
  margin: 0;
  font-family: var(--font-families-gilroy);
  font-style: normal;
  font-weight: bold;
  color: var(--colors-darkblue);

  ${switchProp('size', {
    small: css`
      max-width: 190px;
      font-size: 12px;
      line-height: 14px;

      ${getMediaquery('md')} {
        font-size: 16px;
        line-height: 19px;
      }
    `,
    regular: css`
      font-size: 16px;
      line-height: 19px;
    `,
  })}
`;
