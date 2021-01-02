/** @jsx jsx */
import { css, jsx } from '@emotion/core';

export type CustomUploadButtonProps = {
  label?: string;
  onChange?: any;
};

/**
 * 파일을 `Button` 컴포넌트처럼 보여지고 싶을때 사용 합니다.
 */

export const CustomUploadButton = ({
  label,
  onChange,
}: CustomUploadButtonProps) => {
  return (
    <div css={[style]}>
      <label htmlFor="filePicker">{label}</label>
      <input
        id="filePicker"
        style={{ visibility: 'hidden' }}
        type={'file'}
        onChange={onChange}
      />
    </div>
  );
};
const style = css`
  font-family: 'Noto Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 0.5em;
  cursor: pointer;
  line-height: 1;
  color: #333;
  font-size: 0.875rem;
  padding: 0.688rem 1.25rem;
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;

  &:focus {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
    border: none;
    outline: none;
  }
`;

export default CustomUploadButton;
