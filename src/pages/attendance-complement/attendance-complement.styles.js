import styled from 'styled-components/native';
import RootContainer from '../../components/root-container/root-container.component';
import CustomButton from '../../components/custom-button/custom-button.component';

export const RootContainerStyled = styled(RootContainer)`
  justify-content: space-between;
`;

export const OptionsContainerStyled = styled.View`
  margin: 80px 30px 0;
`;

export const FooterStyled = styled.View`
  margin-bottom: 50px;
  align-items: flex-end;
`;

export const SelectTeacherButtonStyled = styled(CustomButton)`
  height: 50px;
  justify-content: center;
`;

export const SelectLessonButtonStyled = styled(CustomButton)`
  height: 50px;
  justify-content: center;
  margin-top: 20px;
`;

export const SaveButtonStyled = styled(CustomButton)`
  width: 120px;
`;
