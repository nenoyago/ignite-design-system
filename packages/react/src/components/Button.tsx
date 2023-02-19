import { ComponentProps, ElementType } from 'react';
import { styled } from '../styles';

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',
  transition: '0.2s ease',

  svg: {
    width: '$4',
    height: '$4'
  },

  '&:disabled': {
    cursor: 'not-allowed'
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        backgroundColor: '$ignite500',

        '&:not(:disabled):hover': {
          backgroundColor: '$ignite300'
        },

        '&:disabled': {
          backgroundColor: '$gray200'
        }
      },
      secondary: {
        color: '$ignite300',
        border: '2px solid $ignite500',

        '&:not(:disabled):hover': {
          color: '$white',
          backgroundColor: '$ignite500'
        },

        '&:disabled': {
          color: '$gray200',
          borderColor: '$gray200'
        }
      },
      tertiary: {
        color: '$gray100',

        '&:not(:disabled):hover': {
          color: '$white'
        },

        '&:disabled': {
          color: '$gray600'
        }
      }
    },

    size: {
      sm: {
        padding: '0 $4',
        height: 38
      },
      md: {
        padding: '0 $4',
        height: 46
      }
    }
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md'
  }
});

export type ButtonProps = ComponentProps<typeof Button> & {
  as?: ElementType;
};

Button.displayName = 'Button';
