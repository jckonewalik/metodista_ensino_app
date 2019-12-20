import React from 'react';
import { useSelector } from 'react-redux';
import { FlatList } from 'react-native';
import { selectMyClasses } from '../../redux/class/class.selectors';
import ClassOverview from '../class-overview/class-overview.component';
import { ContainerStyled } from './class-list.styles';

const ClassList = () => {
  const classSelector = useSelector(selectMyClasses);

  return (
    <ContainerStyled>
      <FlatList
        data={classSelector}
        renderItem={({ item }) => <ClassOverview classItem={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </ContainerStyled>
  );
};


export default ClassList;
