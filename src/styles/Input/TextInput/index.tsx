/** @jsx jsx */
import { jsx, css } from '@emotion/core';

export type IconProps = {
  /** input의 타입 */
  type?: 'text' | 'password' | 'number';
  name?: string;
  placeholder?: string;
  defaultValue?: string | number;
  label?: string;
  labelAlign?: 'top' | 'middle' | 'bottom';
  direction?: 'row' | 'column';
  labelPosition?: 'left' | 'center' | 'right';
};

/** Text, Password, Number Input을 사용할 때 해당 컴포넌트를 사용하세요.
 *
 * 스타일로 크기를 설정할떄는  `width`로 설정하세요.
 */
export const TextInput = ({
  type,
  name,
  placeholder,
  defaultValue,
  label,
  direction = 'row',
  labelAlign = 'middle',
  labelPosition = 'left',
}: IconProps) => {
  return (
    <div css={[divStyle, divDirection[direction]]}>
      {label && (
        <label
          css={[
            labelStyle,
            labelAligns[labelAlign],
            labelPositions[labelPosition],
          ]}
          htmlFor="input"
        >
          {label}
        </label>
      )}
      <input
        css={[inputStyle]}
        type={type}
        name={name}
        id="input"
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </div>
  );
};
const divStyle = css`
  display: flex;
`;
const divDirection = {
  row: css`
    flex-direction: row;
  `,
  column: css`
    flex-direction: column;
  `,
};
const labelStyle = css`
  margin-right: 0.5rem;
  white-space: nowrap;
`;
const labelAligns = {
  top: css`
    display: flex;
    align-items: baseline;
  `,
  middle: css`
    display: flex;
    align-items: center;
  `,
  bottom: css`
    display: flex;
    align-items: flex-end;
  `,
};
const labelPositions = {
  left: css`
    display: flex;
    justify-content: flex-start;
  `,
  center: css`
    display: flex;
    justify-content: center;
  `,
  right: css`
    display: flex;
    justify-content: flex-end;
  `,
};

const inputStyle = css`
  display: flex;
  width: 100%;
  height: 1rem;
  background: none;
  background-image: none;
  border: 1px solid #ced4da;
`;

export default TextInput;
