import React from 'react';
import { useSelector } from 'react-redux';
import { FlatList } from 'react-native';
import {
  ContainerStyled,
} from './attendance-list.styles';
import AttendanceItem from '../attendance-item/attendance-item.component';
import { selectAttendanceStudents } from '../../redux/attendance/attendance.selectors';

const AttendanceList = () => {
  const students = useSelector(selectAttendanceStudents);
  return (
    <ContainerStyled>
      <FlatList
        data={students}
        renderItem={({ item }) => <AttendanceItem student={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </ContainerStyled>
  );
};

export default AttendanceList;
