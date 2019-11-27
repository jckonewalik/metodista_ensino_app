import React, { useState, useEffect } from 'react';
import { FlatList, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  ContainerStyled, HeaderAttendanceStyled, SelectedDateStyled,
} from './attendance-list.styles';
import AttendanceItem from '../attendance-item/attendance-item.component';
import CustomTouchableIcon from '../custom-touchable-icon/custom-touchable-icon.component';
import arrowLeft from '../../assets/arrow-left.png';
import arrowRight from '../../assets/arrow-right.png';
import back from '../../assets/back.png';
import next from '../../assets/next.png';

const DATA = [
];

const AttendanceList = () => {
  const [date, setDate] = useState(new Date());
  const [mode] = useState('date');
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log(date);
  }, [date]);

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
    setDate(new Date(newdate));
    setShow(Platform.OS === 'ios');
  };

  return (
    <ContainerStyled>
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
      <FlatList
        data={DATA}
        renderItem={({ item }) => <AttendanceItem student={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </ContainerStyled>
  );
};

export default AttendanceList;
