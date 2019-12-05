import styled, { css } from 'styled-components/native';
import CustomText from '../custom-text/custom-text.component';

const getButtonColor = (props) => {
  if (props.disabled) {
    return css`background: #c2c2c2`;
  }
  return css`background: #F22333`;
};

export const ContainerStyled = styled.View`
`;

export const ButtonStyled = styled.TouchableOpacity`
  ${getButtonColor}
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  border-radius: 30;
`;

export const LabelStyled = styled(CustomText)`
  color: #FFF;
  font-size: 16;
  font-weight: 700;
`;
