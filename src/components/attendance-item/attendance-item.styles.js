import styled from 'styled-components/native';
import CustomText from '../custom-text/custom-text.component';

export const ContainerStyled = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 10px;
`;

export const NamedStyled = styled(CustomText)`
  color: #706F6F;
  font-weight: 700;
  font-size: 16;
`;


export const ButtonContainerStyled = styled.View`
  min-width: 70px;
  flex-direction: row;
  justify-content: space-between;
`;
