import { FC } from 'react';
import styled from '@emotion/styled';

import { ArticleHeader } from './components/article-header';
import { ArticleShare } from './components/article-share';

import { Banner } from '../banner';
import { PopularServices } from '../popular-services';
import { PopularServiceProps } from '../popular-services/types';

import { fontColors } from '../../styles/mixins/colors';
import { getMediaquery } from '../../styles/mixins/mediaqueries';

export interface ArticleShareProps {
  icon: string;
  alt: string;
}

export interface FullArticleProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  article: {
    title: string;
    date: string;
    mainImage: string;
    paragraph1: string;
    contentImage1: string;
    contentImage2: string;
    paragraph2: string;
    paragraph3: string;
    subheadingBig: string;
    subheadingParagraph1: string;
    subheadingSmall: string;
    subheadingParagraph2: string;
    bannerTitle: string;
    bannerSubtitle: string;
    linkText: string;
    bannerMainImage: string;
    bannerIconImage: string;
    bannerLink: string;
  };
  services: PopularServiceProps[];
  socialNetworks: ArticleShareProps[];
}

export const Article: FC<FullArticleProps> = ({
  article,
  services,
  socialNetworks,
  ...props
}) => {
  return (
    <ArticleWrapper {...props}>
      <ArticleHeader title={article.title} date={article.date} />
      <HeadImage src={article.mainImage} alt='main_image' />
      <Paragraph>{article.paragraph1}</Paragraph>
      <ContentImage src={article.contentImage1} alt='content_image' />
      <Paragraph>{article.paragraph2}</Paragraph>
      <Banner
        title={article.bannerTitle}
        subtitle={article.bannerSubtitle}
        linkText={article.linkText}
        href={article.bannerLink}
        mainImage={article.bannerMainImage}
        iconImage={article.bannerIconImage}
      />
      <Paragraph>{article.paragraph3}</Paragraph>
      <ContentImage src={article.contentImage2} alt='content_image2' />
      <SubtitleBig>{article.subheadingBig}</SubtitleBig>
      <Paragraph>{article.subheadingParagraph1}</Paragraph>
      <SubtitleSmall>{article.subheadingSmall}</SubtitleSmall>
      <Paragraph>{article.subheadingParagraph2}</Paragraph>
      <PopularServices services={services} />
      <ArticleShare socialNetworks={socialNetworks} />
    </ArticleWrapper>
  );
};

const ArticleWrapper = styled.div`
  width: 100%;
  max-width: 853px;
  display: flex;
  flex-direction: column;

  padding-bottom: 32px;

  ${getMediaquery('sm')} {
    margin-right: 0;
  }
  ${getMediaquery('lg')} {
    margin-right: 42px;
  }
`;

const SubtitleBig = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 32px;
  color: ${fontColors.grey};

  ${getMediaquery('sm')} {
    padding-left: 20px;
  }
  ${getMediaquery('lg')} {
    padding-left: 0;
  }
`;
const SubtitleSmall = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  margin-bottom: 12px;
  color: ${fontColors.grey};

  ${getMediaquery('sm')} {
    padding-left: 20px;
  }
  ${getMediaquery('lg')} {
    padding-left: 0;
  }
`;

const HeadImage = styled.img`
  width: 100%;
  height: 400px;
  margin-bottom: 40px;

  ${getMediaquery('sm')} {
    height: 220px;
  }
  ${getMediaquery('md')} {
    height: 360px;
  }
`;
const ContentImage = styled.img`
  width: 100%;
  height: 360px;
  margin-bottom: 32px;
  border-radius: 8px;

  ${getMediaquery('sm')} {
    height: 220px;
  }
  ${getMediaquery('md')} {
    height: 360px;
  }
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 26px;
  color: ${fontColors.grey};
  margin-bottom: 32px;

  ${getMediaquery('sm')} {
    padding: 0 20px 0 20px;
  }
  ${getMediaquery('lg')} {
    padding: 0;
  }
`;
