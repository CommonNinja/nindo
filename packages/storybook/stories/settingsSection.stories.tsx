import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SettingsSection } from '../../nindo/src/external/components/settingsSection/settingsSection.comp';
import { FormRow } from '../../nindo/src/external/components/formRow/formRow.comp';

export default {
  title: 'Editor/Settings Section',
  component: SettingsSection,

} as ComponentMeta<typeof SettingsSection>;

const Template: ComponentStory<typeof SettingsSection> = (args) => (
  <SettingsSection {...args}> </SettingsSection>
);

export const settingsSection = Template.bind({});

settingsSection.args = {
  data: [{
    title: 'Log in dertails', description: 'Log in dertails', comp: () => (
      <div className='settings-card' >
        <FormRow >
          s
        </FormRow>
      </div>)
  }]
};

