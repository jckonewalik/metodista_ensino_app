import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Picker } from 'react-native';
import Title from '../../components/title/title.component';

import {
  setAttendanceTeacher,
  setAttendanceLesson,
} from '../../redux/attendance/attendance.actions';
import {
  RootContainerStyled,
  BodyStyled,
  FooterStyled,
  LabelStyled,
  PickerStyled,
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
        <LabelStyled>Professor</LabelStyled>
        <PickerStyled
          selectedValue={attendanceTeacher}
          onValueChange={(itemValue) => dispatch(setAttendanceTeacher(itemValue))}
        >
          <Picker.Item
            label="Selecione"
            value={null}
          />
          {
          teachers.map((teacher) => (
            <Picker.Item
              key={teacher.id}
              label={teacher.name}
              value={teacher}
            />
          ))
        }
        </PickerStyled>
        <LabelStyled>Lição</LabelStyled>
        <Picker
          selectedValue={attendanceLesson}
          onValueChange={(itemValue) => dispatch(setAttendanceLesson(itemValue))}
        >
          <Picker.Item
            label="Selecione"
            value={null}
          />
          {
          lessons.map((lesson) => (
            <Picker.Item
              key={lesson.id}
              label={lesson.name}
              value={lesson}
            />
          ))
        }
        </Picker>
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
