import styled from 'styled-components/native';

import CustomButton from '../../components/custom-button/custom-button.component';

export const ButtonContainerStyled = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const CustomButtonStyled = styled(CustomButton)`
  width: 120px;
  height: 40px;
`;

export const AttendanceListContainerStyled = styled.View`
  max-height: 430px;
  margin-top: 30px;
  overflow: hidden;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;
