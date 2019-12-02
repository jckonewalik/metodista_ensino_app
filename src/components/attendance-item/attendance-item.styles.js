import styled from 'styled-components/native';
import CustomText from '../custom-text/custom-text.component';

export const ContainerStyled = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  min-height: 60px;
  border-bottom-color: #EAEAEA;
  border-bottom-width: 1;
`;

export const NamedStyled = styled(CustomText)`
  color: #706F6F;
  font-weight: 700;
  font-size: 18;
`;


export const ButtonContainerStyled = styled.View`
  min-width: 80px;
  flex-direction: row;
  justify-content: space-between;
`;
