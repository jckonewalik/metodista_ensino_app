import React, { useState } from 'react';
import { FlatList } from 'react-native';
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

  const getFormattedDate = (dateToFormat) => `${dateToFormat.getDate()}/${dateToFormat.getMonth() + 1}/${dateToFormat.getFullYear()}`;

  return (
    <ContainerStyled>
      <HeaderAttendanceStyled>
        <CustomTouchableIcon onPress={() => addMonths(-1)} sourceImage={back} />
        <CustomTouchableIcon onPress={() => addDays(-1)} sourceImage={arrowLeft} />
        <SelectedDateStyled>{getFormattedDate(date)}</SelectedDateStyled>
        <CustomTouchableIcon onPress={() => addDays(1)} sourceImage={arrowRight} />
        <CustomTouchableIcon onPress={() => addMonths(1)} sourceImage={next} />
      </HeaderAttendanceStyled>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <AttendanceItem student={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </ContainerStyled>
  );
};

export default AttendanceList;
