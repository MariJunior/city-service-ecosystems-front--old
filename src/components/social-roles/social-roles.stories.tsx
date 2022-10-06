import { Meta, Story } from '@storybook/react';

import { SocialRolesProps, SocialRoles } from './social-roles';

import { mainSocialBtnsArray } from './data';

export default {
  component: SocialRoles,
  title: 'Components/SocialRoles',
} as Meta;

const SocialButtonStory: Story<SocialRolesProps> = (props) => (
  <SocialRoles {...props} socialRolesArray={mainSocialBtnsArray} />
);

export const Default = SocialButtonStory.bind({});
