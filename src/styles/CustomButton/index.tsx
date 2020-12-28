/** @jsx jsx */
import { css, jsx } from '@emotion/core';
export interface ButtonProps {
  children: React.ReactNode;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  theme?: 'secondary' | 'info' | 'success' | 'danger' | 'warning';
  onClick?: () => void;
}

export default function CustomButton({
  theme = 'secondary',
  size = 'medium',
  backgroundColor,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      css={[style, themes[theme], sizes[size]]}
      style={{ backgroundColor }}
      {...props}
    >
      {children}
    </button>
  );
}

const style = css`
  font-family: 'Noto Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 0.5em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  &:focus {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }
`;

const themes = {
  secondary: css`
    color: #333;
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  `,
  info: css`
    color: white;
    background-color: #17a2b8;
  `,
  success: css`
    background-color: #28a745;
    color: white;
  `,
  danger: css`
    color: white;
    background-color: #dc3545;
  `,
  warning: css`
    color: #333;
    background-color: #ffc107;
  `,
  primary: css`
    color: white;
    background-color: #1ea7fd;
  `,
};

const sizes = {
  small: css`
    font-size: 0.75rem;
    padding: 0.625rem 1rem;
  `,
  medium: css`
    font-size: 0.875rem;
    padding: 0.688rem 1.25rem;
  `,
  large: css`
    font-size: 1rem;
    padding: 0.75rem 1.5rem;
  `,
};
