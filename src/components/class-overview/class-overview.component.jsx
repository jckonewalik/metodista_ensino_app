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
import { setAttendanceAppointments } from '../../redux/attendance/attendance.actions';

const DATA = [
  {
    student: {
      id: 1,
      firstName: 'João Carlos',
      middleName: 'Konewalik',
      lastName: 'de Souza',
    },
    status: null,
  },
  {
    student: {
      id: 2,
      firstName: 'Alana Lucia',
      middleName: 'Guerra',
      lastName: 'de Souza',
    },
    status: null,
  }];


const ClassOverview = ({ classItem, navigation }) => {
  const dispatch = useDispatch();

  const handleClick = async () => {
    await dispatch(setCurrentClass(classItem));
    await dispatch(setAttendanceAppointments(DATA));
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
