import React from 'react';
import { Text } from 'react-native';
import { ContainerStyled } from './attendance-list.styles';
import AttendanceItem from '../attendance-item/attendance-item.component';

const AttendanceList = () => (
  <ContainerStyled>
    <Text>List</Text>
    <AttendanceItem />
  </ContainerStyled>
);

export default AttendanceList;
