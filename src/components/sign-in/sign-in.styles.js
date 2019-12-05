import styled from 'styled-components/native';
import CustomText from '../custom-text/custom-text.component';
import CustomButton from '../custom-button/custom-button.component';

export const MainContainerStyled = styled.View`
  flex: 1;
  background: #fff;
  justify-content: space-between;
  padding: 30px;
`;
export const ImageContainerStyled = styled.View`
  align-items: center;
  margin-top: 30px;
`;

export const ImageStyled = styled.Image`
  width: 200;
  height: 200;
  resize-mode: contain;
`;

export const InputContainerStyled = styled.View`

`;

export const ButtonsContainerStyled = styled.View`
  align-items: center;
`;

export const OptionStyled = styled(CustomText)`
  margin: 20px 0;
  font-size: 18px;
  color: #929292;
`;

export const LoginButtonStyled = styled(CustomButton)`
  width: 300px;
  height: 50px;
`;
