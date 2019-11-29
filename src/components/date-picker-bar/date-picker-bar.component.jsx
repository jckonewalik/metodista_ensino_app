import React, { useState } from 'react';
import { TouchableOpacity, View, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { ContainerStyled, SelectedDateStyled } from './date-picker-bar.styles';
import CustomTouchableIcon from '../custom-touchable-icon/custom-touchable-icon.component';

import arrowLeft from '../../assets/arrow-left.png';
import arrowRight from '../../assets/arrow-right.png';
import back from '../../assets/back.png';
import next from '../../assets/next.png';

const DatePickerBarComponent = ({ date = new Date(), handleChange }) => {
  const mode = 'date';
  const [show, setShow] = useState(false);

  const addDays = (days) => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    handleChange(newDate);
  };

  const addMonths = (days) => {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + days);
    handleChange(newDate);
  };

  const selectDate = (event, newdate) => {
    setShow(Platform.OS === 'ios');
    handleChange(newdate || date);
  };

  return (
    <View>
      <ContainerStyled>
        <CustomTouchableIcon onPress={() => addMonths(-1)} sourceImage={back} />
        <CustomTouchableIcon onPress={() => addDays(-1)} sourceImage={arrowLeft} />
        <TouchableOpacity onPress={() => setShow(!show)}>
          <SelectedDateStyled>{`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}</SelectedDateStyled>
        </TouchableOpacity>
        <CustomTouchableIcon onPress={() => addDays(1)} sourceImage={arrowRight} />
        <CustomTouchableIcon onPress={() => addMonths(1)} sourceImage={next} />
      </ContainerStyled>
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
    </View>
  );
};

export default DatePickerBarComponent;
