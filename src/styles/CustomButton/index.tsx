/** @jsx jsx */
import { css, jsx } from '@emotion/core';
export interface ButtonProps {
  label: React.ReactNode;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  theme?:
    | 'secondary'
    | 'primary'
    | 'info'
    | 'success'
    | 'danger'
    | 'warning'
    | 'out_primary'
    | 'out_info'
    | 'out_success'
    | 'out_danger'
    | 'out_warning';
  onClick?: () => void;
}

export const CustomButton = ({
  theme = 'secondary',
  size = 'medium',
  backgroundColor,
  className,
  label,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      css={[style, themes[theme], sizes[size]]}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

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
    border: none;
    outline: none;
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
    &:hover {
      background-color: #17b2ca;
    }
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
  out_info: css`
    background-color: transparent;
    box-shadow: #17a2b8 0px 0px 0px 1px inset;
    color: #17a2b8;
  `,
  out_success: css`
    background-color: transparent;
    box-shadow: #28a745 0px 0px 0px 1px inset;
    color: #28a745;
  `,
  out_danger: css`
    color: #dc3545;
    background-color: transparent;
    box-shadow: #dc3545 0px 0px 0px 1px inset;
  `,
  out_warning: css`
    color: #ffc107;
    background-color: transparent;
    box-shadow: #ffc107 0px 0px 0px 1px inset;
  `,
  out_primary: css`
    color: #1ea7fd;
    background-color: transparent;
    box-shadow: #1ea7fd 0px 0px 0px 1px inset;
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

export default CustomButton;
