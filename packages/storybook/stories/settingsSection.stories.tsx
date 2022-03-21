import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SettingsDetails, SettingsForm, SettingsSection } from '../../nindo/src/external/components/settingsSection/settingsSection.comp';
import { FormRow } from '../../nindo/src/external/components/formRow/formRow.comp';
import { FormLabel } from '../../nindo/src/external/components/formLabel/formLabel.comp';
import { Input } from '../../nindo/src/external/components/input/input.comp';

export default {
  title: 'Editor/Settings Section',
  component: SettingsSection,

} as ComponentMeta<typeof SettingsSection>;

const Template: ComponentStory<typeof SettingsSection> = (args) => {
  const [inputText, setInputText] = useState('')

  return (
    <SettingsSection>
      <SettingsDetails title='Log in details' description='Your customers will use this information to contact you.' />
      <SettingsForm>
        <FormRow className="settings-from-row">
          <FormLabel>Text Field</FormLabel>
          <input
            type="text"
            placeholder="Enter text"
            value={inputText}
            onChange={(e: any) => setInputText(e.target.value)}
          />
        </FormRow>
      </SettingsForm>
    </SettingsSection>
  )
};

export const settingsSection = Template.bind({});
