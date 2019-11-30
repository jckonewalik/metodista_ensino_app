import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomPickerButton from '../../components/custom-picker-button/custom-picker-button.component';
import Title from '../../components/title/title.component';

import {
  setAttendanceTeacher,
  setAttendanceLesson,
} from '../../redux/attendance/attendance.actions';
import {
  RootContainerStyled,
  BodyStyled,
  FooterStyled,
  SaveButtonStyled,
} from './attendance-complement.styles';
import {
  selectAttendanceTeacher,
  selectAttendanceLesson,
} from '../../redux/attendance/attendance.selectors';

const teachers = [
  {
    id: 1,
    name: 'João',
  },
  {
    id: 2,
    name: 'Amanda ',
  },
  {
    id: 3,
    name: 'Leandro',
  },
];
const lessons = [
  {
    id: 1,
    name: '01 - Pecado',
  },
  {
    id: 2,
    name: '02 - Arrependimento',
  },
  {
    id: 3,
    name: '03 - Salvação',
  },
];

const AttendanceComplementPage = () => {
  const dispatch = useDispatch();
  const attendanceTeacher = useSelector(selectAttendanceTeacher);
  const attendanceLesson = useSelector(selectAttendanceLesson);
  return (
    <RootContainerStyled>
      <BodyStyled>
        <CustomPickerButton
          label="Professor"
          value={attendanceTeacher}
          handleChange={(itemValue) => dispatch(setAttendanceTeacher(itemValue))}
          options={teachers}
        />
        <CustomPickerButton
          label="Lição"
          value={attendanceLesson}
          handleChange={(itemValue) => dispatch(setAttendanceLesson(itemValue))}
          options={lessons}
        />
      </BodyStyled>
      <FooterStyled>
        <SaveButtonStyled>SALVAR</SaveButtonStyled>
      </FooterStyled>
    </RootContainerStyled>
  );
};
AttendanceComplementPage.navigationOptions = ({ navigation }) => {
  const currentClass = navigation.getParam('currentClass');
  return ({
    headerTitle: () => <Title title="Lista de Presença" subtitle={currentClass ? `${currentClass.name} - ${currentClass.description}` : ''} />,
  });
};

export default AttendanceComplementPage;
