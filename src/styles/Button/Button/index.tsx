/** @jsx jsx */
import { css, jsx } from '@emotion/core';
export interface ButtonProps {
  children: React.ReactNode;
  backgroundColor?: string;
  /** 버튼의 크기를 지정 합니다. */
  size?: 'small' | 'medium' | 'large';
  /** 버튼의 테마를 설정합니다. */
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
  /** 버튼에서 아이콘만 보여줄 때 이 값을 `true`로 설정하세요. */
  iconOnly?: boolean;
  /** 버튼의 너비를 임의로 설정합니다. */
  width?: string | number;
  onClick?: () => void;
}

export const Button = ({
  theme = 'secondary',
  size = 'medium',
  backgroundColor,
  children,
  width,
  iconOnly,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      css={[
        style,
        themes[theme],
        sizes[size],
        { width },
        iconOnly && [iconOnlyStyle, iconOnlySizes[size]],
      ]}
      style={{ backgroundColor }}
      {...props}
    >
      {children}
    </button>
  );
};

const style = css`
  font-family: 'Noto Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  outline: none;
  border: none;
  box-sizing: border-box;
  height: 2rem;
  font-size: 0.875rem;
  padding: 0 1rem;
  border-radius: 0.25rem;
  line-height: 1;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &:focus {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
    border: none;
    outline: none;
  }
  svg {
    width: 1em;
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

const iconOnlyStyle = css`
  padding: 0;
  border-radius: 50%;
  svg {
    margin: 0;
  }
`;

const iconOnlySizes = {
  small: css`
    width: 1.75rem;
    height: 1.75rem;
  `,
  medium: css`
    width: 2.5rem;
    height: 2.5rem;
  `,
  large: css`
    width: 3rem;
    height: 3rem;
  `,
};

export default Button;
