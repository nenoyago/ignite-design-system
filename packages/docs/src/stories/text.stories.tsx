import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from '@neno-ignite-ui/react';

export default {
  title: 'Surfaces/Text',
  component: Text,
  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dicta quidem cum temporibus vero id atque sequi ipsa impedit, aliquid doloremque eveniet accusamus excepturi! Cupiditate unde dignissimos iusto animi minima!'
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl'
      ],
      control: {
        type: 'select'
      }
    }
  }
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};
export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong'
  }
};
