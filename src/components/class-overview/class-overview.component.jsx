import React from 'react';
import { useDispatch } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import {
  ContainerStyled,
  ClassContainerStyled,
  ClassNameStyled,
  ClassDescriptionStyled,
} from './class-overview.styles';
import Amount from '../amount/amount.component';
import { setCurrentClass } from '../../redux/class/class.actions';


const ClassOverview = ({ classItem, navigation }) => {
  const dispatch = useDispatch();

  const handleClick = async () => {
    await dispatch(setCurrentClass(classItem));
    navigation.push('Attendance', { currentClass: classItem });
  };

  return (
    <TouchableOpacity onPress={handleClick}>
      <ContainerStyled>
        <ClassContainerStyled>
          <ClassNameStyled>{classItem.name}</ClassNameStyled>
          <ClassDescriptionStyled>{classItem.description}</ClassDescriptionStyled>
        </ClassContainerStyled>
        <Amount amount={classItem.studentsAmount} label="ALUNOS" />
      </ContainerStyled>
    </TouchableOpacity>
  );
};

export default withNavigation(ClassOverview);
