import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarProps } from '@neno-ignite-ui/react';

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/nenoyago.png',
    alt: 'Yago Neno'
  },
  argTypes: {
    src: {
      control: {
        type: 'text'
      }
    },
    alt: {
      control: {
        type: 'text'
      }
    }
  }
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined
  }
};
