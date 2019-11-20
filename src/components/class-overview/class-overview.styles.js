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

export const ContainerStyled = styled.View`
  margin: 0 0 10px;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background: #FFF;
`;

export const ClassContainerStyled = styled.View`
  justify-content: space-between;
`;

export const AmountStudentsContainerStyled = styled.View`
  align-items: center;
`;

export const AmountStudentsStyled = styled.Text`
  ${font}
  color: #F55E5E;
  font-weight: 700;
  font-size: 30;
`;

export const ClassNameStyled = styled.Text`
  ${font}
  ${colorPrimary}
  font-weight: 700;
  font-size: 18;
`;

export const ClassDescriptionStyled = styled.Text`
  ${font}
  ${colorSecundary}
  font-size: 16;
`;

export const StudentsLabelStyled = styled.Text`
  ${font}
  ${colorSecundary}
  font-size: 12;
`;
