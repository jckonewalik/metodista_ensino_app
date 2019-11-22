import React from 'react';
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
  {
    id: '1',
    title: 'First Item',
  },
  {
    id: '2',
    title: 'Second Item',
  },
  {
    id: '3',
    title: 'Third Item',
  },
  {
    id: '4',
    title: 'Third Item',
  },
  {
    id: '5',
    title: 'Third Item',
  },
  {
    id: '6',
    title: 'Third Item',
  },
  {
    id: '7',
    title: 'Third Item',
  },
];

const AttendanceList = () => (
  <ContainerStyled>
    <HeaderAttendanceStyled>
      <CustomTouchableIcon sourceImage={back} />
      <CustomTouchableIcon sourceImage={arrowLeft} />
      <SelectedDateStyled>22/11/2019</SelectedDateStyled>
      <CustomTouchableIcon sourceImage={arrowRight} />
      <CustomTouchableIcon sourceImage={next} />
    </HeaderAttendanceStyled>
    <FlatList
      data={DATA}
      renderItem={() => <AttendanceItem />}
      keyExtractor={(item) => item.id}
    />
  </ContainerStyled>
);

export default AttendanceList;
