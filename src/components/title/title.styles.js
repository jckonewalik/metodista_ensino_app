import styled, { css } from 'styled-components/native';

const font = css`
  font-family: Roboto;
  color: #fff;
`;

export const ViewStyled = styled.View`
  margin-left: 10px;
  margin-bottom: 10px;
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
