import { Meta, Story } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { news, newsListingBanner } from './data';
import { NewsListing, NewsListingProps } from './news-listing';

export default {
  component: NewsListing,
  title: 'Content/NewsListing',
  decorators: [withKnobs],
} as Meta;

const NewsListingStory: Story<NewsListingProps> = (props: NewsListingProps) => (
  <NewsListing
  {...props}
  cards={news}
  banner={newsListingBanner}
  title={text('Title', 'Интересно и полезно')}
  />
);

export const Default = NewsListingStory.bind({});
