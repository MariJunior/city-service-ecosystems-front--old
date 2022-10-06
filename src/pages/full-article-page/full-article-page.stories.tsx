import { Meta, Story } from '@storybook/react';

import { FullArticlePage } from './full-article-page';

export default {
  component: FullArticlePage,
  title: 'Pages/FullArticlePage',
} as Meta;

const FullArticlePageStory: Story = () => <FullArticlePage />;

export const Default = FullArticlePageStory.bind({});
