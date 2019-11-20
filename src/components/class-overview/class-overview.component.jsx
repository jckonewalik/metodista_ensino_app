import React from 'react';
import { TouchableHighlight } from 'react-native';
import { withNavigation } from 'react-navigation';
import {
  ContainerStyled,
  ClassContainerStyled,
  AmountStudentsContainerStyled,
  ClassNameStyled,
  ClassDescriptionStyled,
  StudentsLabelStyled,
  AmountStudentsStyled,
} from './class-overview.styles';

const ClassOverview = ({ navigation }) => (
  <TouchableHighlight onPress={() => navigation.push('AttendanceList')}>
    <ContainerStyled>
      <ClassContainerStyled>
        <ClassNameStyled>CDV</ClassNameStyled>
        <ClassDescriptionStyled>Sábado - 2° sem / 2019</ClassDescriptionStyled>
      </ClassContainerStyled>
      <AmountStudentsContainerStyled>
        <AmountStudentsStyled>05</AmountStudentsStyled>
        <StudentsLabelStyled>ALUNOS</StudentsLabelStyled>
      </AmountStudentsContainerStyled>
    </ContainerStyled>
  </TouchableHighlight>
);

export default withNavigation(ClassOverview);
