import type { Preview } from '@storybook/react-vite'
import '../src/styles/fonts.css'
import '../src/design-tokens/semantic-colors.css'
import '../src/design-tokens/semantic-spacing.css'
import '../src/design-tokens/semantic-radius.css'
import '../src/figma-tokens/colors/colors.css'
import '../src/figma-tokens/spacing/spacing.css'
import '../src/figma-tokens/radius/radius.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;