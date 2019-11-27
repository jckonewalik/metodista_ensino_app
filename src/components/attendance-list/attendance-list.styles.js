import styled from 'styled-components/native';
import CustomText from '../custom-text/custom-text.component';

export const ContainerStyled = styled.View`
  height: 400px;
  background: #FFF;
  margin: 30px 0 10px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  overflow: hidden;
`;

export const HeaderAttendanceStyled = styled.View`
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
