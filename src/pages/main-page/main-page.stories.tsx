import { Meta, Story } from '@storybook/react';

import { MainPage } from './main-page';

export default {
  component: MainPage,
  title: 'Pages/MainPage',
} as Meta;

const MainPageStory: Story = () => <MainPage />;

export const Default = MainPageStory.bind({});
