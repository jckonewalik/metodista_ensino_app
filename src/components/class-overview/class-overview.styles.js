import styled, { css } from 'styled-components/native';

const font = css`
  font-family: Roboto;
`;

const colorPrimary = css`
  color: #706F6F;
`;

const colorSecundary = css`
  color: #929292;
`;

export const AmountStudentsStyled = styled.Text`
  ${font}
  color: #F55E5E;
  font-weight: 700;
  font-size: 25;
`;

export const ClassNameStyled = styled.Text`
  ${font}
  ${colorPrimary}
  font-size: 14;
`;

export const ClassDescriptionStyled = styled.Text`
  ${font}
  ${colorSecundary}
  font-size: 12;
`;

export const StudentsLabelStyled = styled.Text`
  ${font}
  ${colorSecundary}
  font-size: 8;
`;
