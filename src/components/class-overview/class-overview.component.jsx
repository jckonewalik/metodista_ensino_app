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
import { setCurrentClassStart } from '../../redux/class/class.actions';
// import { setAttendanceAppointments } from '../../redux/attendance/attendance.actions';

// const DATA = [
//   {
//     student: {
//       id: 1,
//       firstName: 'Aluno 1',
//       middleName: '',
//       lastName: '',
//     },
//     status: null,
//   },
//   {
//     student: {
//       id: 2,
//       firstName: 'Aluno 2',
//       middleName: '',
//       lastName: '',
//     },
//     status: null,
//   },
//   {
//     student: {
//       id: 3,
//       firstName: 'Aluno 3',
//       middleName: '',
//       lastName: '',
//     },
//     status: null,
//   }];


const ClassOverview = ({ classItem, navigation }) => {
  const dispatch = useDispatch();

  const handleClick = async () => {
    await dispatch(setCurrentClassStart(classItem));
    navigation.push('Attendance', { currentClass: classItem });
  };

  return (
    <TouchableOpacity onPress={handleClick}>
      <ContainerStyled>
        <ClassContainerStyled>
          <ClassNameStyled>{classItem.name}</ClassNameStyled>
          <ClassDescriptionStyled>{classItem.description}</ClassDescriptionStyled>
        </ClassContainerStyled>
        <Amount amount={classItem.amountOfStudents} label="ALUNOS" />
      </ContainerStyled>
    </TouchableOpacity>
  );
};

export default withNavigation(ClassOverview);
