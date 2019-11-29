import React from 'react';

import Title from '../../components/title/title.component';
import {
  RootContainerStyled,
  OptionsContainerStyled,
  FooterStyled,
  SaveButtonStyled,
  SelectTeacherButtonStyled,
  SelectLessonButtonStyled,
} from './attendance-complement.styles';

const AttendanceComplementPage = () => (
  <RootContainerStyled>
    <OptionsContainerStyled>
      <SelectTeacherButtonStyled>SELECIONAR PROFESSOR</SelectTeacherButtonStyled>
      <SelectLessonButtonStyled>SELECIONAR AULA</SelectLessonButtonStyled>
    </OptionsContainerStyled>
    <FooterStyled>
      <SaveButtonStyled>SALVAR</SaveButtonStyled>
    </FooterStyled>
  </RootContainerStyled>
);

AttendanceComplementPage.navigationOptions = ({ navigation }) => {
  const currentClass = navigation.getParam('currentClass');
  return ({
    headerTitle: () => <Title title="Lista de Presença" subtitle={currentClass ? `${currentClass.name} - ${currentClass.description}` : ''} />,
  });
};

export default AttendanceComplementPage;
