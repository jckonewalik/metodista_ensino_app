import React, { useState } from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import AttendanceOverview from '../../components/attendance-overview/attendance-overview.component';
import Title from '../../components/title/title.component';
import RootContainer from '../../components/root-container/root-container.component';
import AttendanceList from '../../components/attendance-list/attendance-list.component';
import {
  ButtonContainerStyled, CustomButtonStyled, HeaderAttendanceStyled, SelectedDateStyled,
} from './attendance.styles';
import CustomTouchableIcon from '../../components/custom-touchable-icon/custom-touchable-icon.component';
import arrowLeft from '../../assets/arrow-left.png';
import arrowRight from '../../assets/arrow-right.png';
import back from '../../assets/back.png';
import next from '../../assets/next.png';

const AttendancePage = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [mode] = useState('date');
  const [show, setShow] = useState(false);

  const addDays = (days) => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    setDate(newDate);
  };

  const addMonths = (days) => {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + days);
    setDate(newDate);
  };

  const selectDate = (event, newdate) => {
    setShow(Platform.OS === 'ios');
    setDate(newdate || date);
  };
  return (

    <RootContainer>
      <AttendanceOverview />
      <HeaderAttendanceStyled>
        <CustomTouchableIcon onPress={() => addMonths(-1)} sourceImage={back} />
        <CustomTouchableIcon onPress={() => addDays(-1)} sourceImage={arrowLeft} />
        <TouchableOpacity onPress={() => setShow(!show)}>
          <SelectedDateStyled>{`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}</SelectedDateStyled>
        </TouchableOpacity>
        <CustomTouchableIcon onPress={() => addDays(1)} sourceImage={arrowRight} />
        <CustomTouchableIcon onPress={() => addMonths(1)} sourceImage={next} />
      </HeaderAttendanceStyled>
      { show && (
      <DateTimePicker
        value={date}
        mode={mode}
        locale="pt_BR"
        is24Hour
        display="default"
        onChange={selectDate}
      />
      )}
      <AttendanceList />
      <ButtonContainerStyled>
        <CustomButtonStyled onPress={() => navigation.push('AttendanceComplement')}>
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
