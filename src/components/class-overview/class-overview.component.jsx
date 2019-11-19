import React from 'react';
import { View } from 'react-native';
import {
  ClassNameStyled, ClassDescriptionStyled, StudentsLabelStyled, AmountStudentsStyled,
} from './class-overview.styles';

const ClassOverview = () => (
  <View>
    <View>
      <ClassNameStyled>CDV</ClassNameStyled>
      <ClassDescriptionStyled>Sábado - 2° sem / 2019</ClassDescriptionStyled>
    </View>
    <View>
      <AmountStudentsStyled>05</AmountStudentsStyled>
      <StudentsLabelStyled>ALUNOS</StudentsLabelStyled>
    </View>
  </View>
);

export default ClassOverview;
