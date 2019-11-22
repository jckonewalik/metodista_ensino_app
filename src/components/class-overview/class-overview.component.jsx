import React from 'react';
import { TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import {
  ContainerStyled,
  ClassContainerStyled,
  ClassNameStyled,
  ClassDescriptionStyled,
} from './class-overview.styles';
import Amount from '../amount/amount.component';

const ClassOverview = ({ navigation }) => (
  <TouchableOpacity onPress={() => navigation.push('Attendance')}>
    <ContainerStyled>
      <ClassContainerStyled>
        <ClassNameStyled>CDV</ClassNameStyled>
        <ClassDescriptionStyled>Sábado - 2° sem / 2019</ClassDescriptionStyled>
      </ClassContainerStyled>
      <Amount amount="05" label="ALUNOS" />
    </ContainerStyled>
  </TouchableOpacity>
);

export default withNavigation(ClassOverview);
