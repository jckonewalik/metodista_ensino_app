import styled from 'styled-components/native';

import CustomText from '../custom-text/custom-text.component';

export const ContainerStyled = styled.View`
  padding: 10px
  flex-direction: row;
  justify-content: space-between;
  min-height: 50px;
  background: #F22333;
`;

export const SelectedDateStyled = styled(CustomText)`
  margin: 0 30px;
  font-size: 20;
  font-weight: 700;
  color: #FFF;
`;
