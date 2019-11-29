import styled from 'styled-components/native';

import CustomButton from '../../components/custom-button/custom-button.component';

export const ButtonContainerStyled = styled.View`
  flex: 1;
  align-items: flex-end;
`;

export const CustomButtonStyled = styled(CustomButton)`
  width: 120px;
`;

export const AttendanceListContainerStyled = styled.View`
  margin-top: 30px;
  overflow: hidden;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;
