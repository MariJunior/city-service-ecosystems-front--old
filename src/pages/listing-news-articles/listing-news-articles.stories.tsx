import { Meta, Story } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import { ListingNewsArticles } from './listing-news-articles';

export default {
  component: ListingNewsArticles,
  title: 'Pages/ListingNewsArticles',
  decorators: [withKnobs],
} as Meta;

const ListingNewsArticlesStory: Story = () => <ListingNewsArticles />;

export const Default = ListingNewsArticlesStory.bind({});
