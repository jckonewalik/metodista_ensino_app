import styled, { css } from 'styled-components/native';
import CustomText from '../custom-text/custom-text.component';

const font = css`
  color: #fff;
`;

export const ContainerStyled = styled.View`
`;

export const TitleStyled = styled(CustomText)`
  ${font}
  font-size: 20;
  font-weight: 700;
`;

export const SubTitleStyled = styled(CustomText)`
  ${font}
  font-size: 14;
  font-weight: 300;
`;
