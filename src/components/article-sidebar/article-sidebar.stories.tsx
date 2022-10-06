import { Meta, Story } from '@storybook/react';
import { withKnobs, radios } from '@storybook/addon-knobs';

import { ArticleSidebar } from './article-sidebar';
import { ArticleSidebarFullProps } from './types';

export default {
  component: ArticleSidebar,
  title: 'Components/ArticleSidebar',
  args: {
    news: [
      {
        title: 'Как получить выплату на детей с 3 до 16 лет',
        date: '27 мая 2021',
        link: '/',
      },
      {
        title: 'Как получить выплату на детей с 3 до 16 лет',
        date: '16 мая 2021',
        link: '/',
      },
      {
        title: 'Как получить выплату на детей с 3 до 16 лет',
        date: '03 мая 2021',
        link: '/',
      },
      {
        title: 'Как получить выплату на детей с 3 до 16 лет',
        date: '07 мая 2021',
        link: '/',
      },
    ],
  },
  decorators: [withKnobs],
} as Meta;

const ArticleSidebarStory: Story<ArticleSidebarFullProps> = (
  args: ArticleSidebarFullProps
) => (
  <ArticleSidebar
    {...args}
    size={radios('Size', {Small: 'small', Regular: 'regular'}, 'regular')}
    discussionLink='/'
  />
);

export const Default = ArticleSidebarStory.bind({});
