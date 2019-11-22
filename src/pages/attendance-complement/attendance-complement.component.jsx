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

AttendanceComplementPage.navigationOptions = () => ({
  headerTitle: () => <Title title="Fundamentos da Fé - 2° sem / 2019" subtitle="22/11/2019" />,
});

export default AttendanceComplementPage;
