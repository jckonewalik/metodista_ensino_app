import styled from 'styled-components/native';

import CustomButton from '../../components/custom-button/custom-button.component';
import CustomText from '../../components/custom-text/custom-text.component';

export const ButtonContainerStyled = styled.View`
  flex: 1;
  align-items: flex-end;
`;

export const CustomButtonStyled = styled(CustomButton)`
  width: 120px;
`;

export const HeaderAttendanceStyled = styled.View`
  padding: 10px
  flex-direction: row;
  justify-content: space-between;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  min-height: 50px;
  background: #F22333;
  margin-top: 30px;

`;
export const SelectedDateStyled = styled(CustomText)`
  margin: 0 30px;
  font-size: 20;
  font-weight: 700;
  color: #FFF;
`;
