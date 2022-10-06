import { Meta, Story } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import NewsCardFirst from '../../../storybook/images/news-card-main-1.png';

import { NewsCardMain } from './news-card-main';
import { NewsCardProps } from '../types';

export default {
  component: NewsCardMain,
  title: 'Components/NewsCards/NewsCardMain',
  decorators: [withKnobs],
} as Meta;

const NewsCardStory: Story<NewsCardProps> = (props: NewsCardProps) => (
  <NewsCardMain
    {...props}
    imageSrc={NewsCardFirst}
    title={text('title', 'Что изменилось в начислении пособий для безработных в 2020 году')}
    subtitle={text('subtitle', 'Электронная трудовая книжка, справка о статусе предпенсионера и размере пенсии')}
    date={text('date', '2 декабря 2021')}
  />
);

export const Default = NewsCardStory.bind({});
