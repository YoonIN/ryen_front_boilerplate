import { addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

addParameters({
  viewport: {
    viewport: INITIAL_VIEWPORTS,
  },
});
