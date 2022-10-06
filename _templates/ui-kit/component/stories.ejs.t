---
to: src/<%= fullPath %>/<%= name %>.stories.tsx
---
<% const compName = h.inflection.undasherize(name) -%>
<% const categoryName = h.inflection.capitalize(category) -%>
<% const props = `${compName}Props` -%>
import { Meta, Story } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import { <%= compName %>, <%= props %> } from './<%= name %>';

export default {
  component: <%= compName %>,
  title: '<%= categoryName %>/<%= compName %>',
  decorators: [withKnobs],
} as Meta;

const <%= compName %>Story: Story<<%= props %>> = (props: <%= props %>) => <<%= compName %> {...props} />;

export const Default = <%= compName %>Story.bind({});
