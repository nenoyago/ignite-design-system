import type { Meta, StoryObj } from '@storybook/react';
import { Heading, HeadingProps } from '@neno-ignite-ui/react';

export default {
  title: 'Surfaces/Heading',
  component: Heading,
  args: {
    size: 'md',
    children: 'Custom title'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '3xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'select'
      }
    }
  }
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {};
export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1'
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão, o componente Heading é um `h2`, mas podemos alterar isso passando o `as` prop.'
      }
    }
  }
};
