import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AttendanceOverview from '../../components/attendance-overview/attendance-overview.component';
import Title from '../../components/title/title.component';
import RootContainer from '../../components/root-container/root-container.component';
import AttendanceList from '../../components/attendance-list/attendance-list.component';
import DatePickerBarComponent from '../../components/date-picker-bar/date-picker-bar.component';
import { setAttendanceDate } from '../../redux/attendance/attendance.actions';
import { selectAttendanceDate, selectAttendancesComplete } from '../../redux/attendance/attendance.selectors';
import {
  ButtonContainerStyled,
  CustomButtonStyled,
  AttendanceListContainerStyled,
} from './attendance.styles';

const AttendancePage = ({ navigation }) => {
  const dispatch = useDispatch();
  const attendanceDate = useSelector(selectAttendanceDate);
  const attendancesComplete = useSelector(selectAttendancesComplete);

  const selectDate = (newdate) => {
    dispatch(setAttendanceDate(newdate));
  };

  return (
    <RootContainer>
      <AttendanceOverview />
      <AttendanceListContainerStyled>
        <DatePickerBarComponent
          date={attendanceDate}
          handleChange={selectDate}
        />
        <AttendanceList />
      </AttendanceListContainerStyled>
      <ButtonContainerStyled>
        <CustomButtonStyled
          disabled={!attendancesComplete}
          onPress={() => navigation.push('AttendanceComplement',
            { currentClass: navigation.getParam('currentClass') })}
        >
        SALVAR
        </CustomButtonStyled>
      </ButtonContainerStyled>
    </RootContainer>
  );
};
AttendancePage.navigationOptions = ({ navigation }) => {
  const currentClass = navigation.getParam('currentClass');
  return ({
    headerTitle: () => <Title title="Lista de Presença" subtitle={currentClass ? `${currentClass.name} - ${currentClass.description}` : ''} />,
  });
};

export default AttendancePage;
