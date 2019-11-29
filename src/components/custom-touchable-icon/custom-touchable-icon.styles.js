import styled, { css } from 'styled-components/native';

const OpacityStyle = css`opacity: 0.2`;
const RegularStyle = css`opacity: 1`;

const getStyleClass = (props) => {
  if (props.isOpacity) {
    return OpacityStyle;
  }
  return RegularStyle;
};

export const ImageStyled = styled.Image`
  margin-left: 5px;
  margin-right: 5px;

  ${getStyleClass}
`;
