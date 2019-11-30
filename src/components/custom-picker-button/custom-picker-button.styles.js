import styled from 'styled-components/native';
import CustomText from '../custom-text/custom-text.component';

export const ContainerStyled = styled.View`
  margin: 10px;
`;

export const ContentContainerStyled = styled.View`
  background: #F22333;
  min-height: 50px;
  flex-direction: row;
  justify-content: space-around;
  padding: 0 10px;
  align-items: center;
  border-radius: 30;
`;


export const LabelStyled = styled(CustomText)`
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
`;

export const ValueStyled = styled(CustomText)`
  font-size: 16px;
  color: #fff;
`;
