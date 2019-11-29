import React from 'react';
import { useSelector } from 'react-redux';
import { FlatList } from 'react-native';
import {
  ContainerStyled,
} from './attendance-list.styles';
import AttendanceItem from '../attendance-item/attendance-item.component';
import { selectAttendanceAppointments } from '../../redux/attendance/attendance.selectors';

const AttendanceList = () => {
  const appointments = useSelector(selectAttendanceAppointments);
  return (
    <ContainerStyled>
      <FlatList
        data={appointments}
        renderItem={({ item }) => <AttendanceItem appointment={item} />}
        keyExtractor={(item) => item.student.id.toString()}
      />
    </ContainerStyled>
  );
};

export default AttendanceList;
