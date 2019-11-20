import styled, { css } from 'styled-components/native';

const font = css`
  font-family: Roboto;
  color: #fff;
`;

export const ContainerStyled = styled.View`
  margin: 10px 10px 10px 0;
`;

export const TitleStyled = styled.Text`
  ${font}
  font-size: 20;
  font-weight: 700;
`;

export const SubTitleStyled = styled.Text`
  ${font}
  font-size: 14;
  font-weight: 300;
`;
