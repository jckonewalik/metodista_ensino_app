import styled from 'styled-components/native';
import CustomText from '../custom-text/custom-text.component';

export const ContainerStyled = styled.View`
  align-items: center;
`;

export const AmountStyled = styled(CustomText)`
  color: #F55E5E;
  font-weight: 700;
  font-size: 30;
`;

export const LabelStyled = styled(CustomText)`
  color: #929292;
  font-size: 12;
`;
