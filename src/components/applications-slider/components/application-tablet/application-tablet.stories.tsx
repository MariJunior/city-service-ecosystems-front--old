import React from 'react';
import { Meta, Story } from '@storybook/react';

import { ApplicationTablet } from './application-tablet';
import { ApplicationSliderCard } from '../application-slider-card';

import { ApplicationBlockArray } from '../../data';

export default {
  component: ApplicationTablet,
  title: 'Components/ApplicationsSliderTablet',
} as Meta;

const ApplicationsSliderStory: Story = (props) => (
  <>
    <ApplicationTablet {...props}>
      {ApplicationBlockArray.slice(0, 6).map((item) => (
        <ApplicationSliderCard
          title={item.title}
          subtitle={item.subtitle}
          icon={item.icon}
          mark={item.mark}
        />
      ))}
    </ApplicationTablet>
  </>
);

export const Default = ApplicationsSliderStory.bind({});
