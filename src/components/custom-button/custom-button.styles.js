import styled from 'styled-components/native';
import CustomText from '../custom-text/custom-text.component';

export const ContainerStyled = styled.View`
`;

export const ButtonStyled = styled.TouchableOpacity`
  background: #F55E5E;
  align-items: center;
  border-radius: 30;
  padding: 5px 0;
`;

export const LabelStyled = styled(CustomText)`
  color: #FFF;
  font-size: 16;
  font-weight: 700;
  text-transform: uppercase;
`;
