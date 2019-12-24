import React, { useState, useEffect } from 'react';
import { Platform, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CustomPickerButton from '../../components/custom-picker-button/custom-picker-button.component';
import Title from '../../components/title/title.component';


import {
  setAttendanceTeacher,
  setAttendanceLesson,
  saveAttendanceStart,
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
  selectAttendanceMessage,
} from '../../redux/attendance/attendance.selectors';
import { selectTeachersCurrentClass } from '../../redux/class/class.selectors';

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
  const [showTeacher, setShowTeacher] = useState(false);
  const [showLesson, setShowLesson] = useState(false);
  const dispatch = useDispatch();
  const teachers = useSelector(selectTeachersCurrentClass);
  const attendanceTeacher = useSelector(selectAttendanceTeacher);
  const attendanceLesson = useSelector(selectAttendanceLesson);
  const attendanceMessage = useSelector(selectAttendanceMessage);
  const handleTeacherPress = (value) => {
    setShowTeacher(value);
    setShowLesson(false);
  };
  const handleTeacherChange = (itemValue) => {
    setShowTeacher(Platform.OS === 'ios');
    dispatch(setAttendanceTeacher(itemValue));
  };
  const handleLessonPress = (value) => {
    setShowLesson(value);
    setShowTeacher(false);
  };
  const handleLessonChange = (itemValue) => {
    setShowLesson(Platform.OS === 'ios');
    dispatch(setAttendanceLesson(itemValue));
  };
  const handleSaveButton = () => {
    dispatch(saveAttendanceStart());
  };
  const showMessage = () => {
    if (attendanceMessage !== '') {
      Alert.alert(
        '',
        `${attendanceMessage}`,
        [
          { text: 'OK' },
        ],
        { cancelable: false },
      );
    }
  };
  useEffect(() => showMessage(), [attendanceMessage]);

  return (
    <RootContainerStyled>
      <BodyStyled>
        <CustomPickerButton
          label="Professor"
          value={attendanceTeacher}
          show={showTeacher}
          handlePress={handleTeacherPress}
          handleChange={handleTeacherChange}
          options={teachers.map((teacher) => ({ id: teacher.id, name: `${teacher.firstName}` }))}
        />
        <CustomPickerButton
          label="Lição"
          value={attendanceLesson}
          show={showLesson}
          handlePress={handleLessonPress}
          handleChange={handleLessonChange}
          options={lessons}
        />
      </BodyStyled>
      <FooterStyled>
        <SaveButtonStyled onPress={handleSaveButton}>SALVAR</SaveButtonStyled>
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
