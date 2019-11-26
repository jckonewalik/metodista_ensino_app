import React from 'react';
import { FlatList } from 'react-native';
import ClassOverview from '../class-overview/class-overview.component';
import { ContainerStyled } from './class-list.styles';

const ClassList = ({ classes }) => (
  <ContainerStyled>
    <FlatList
      data={classes}
      renderItem={({ item }) => <ClassOverview classItem={item} />}
      keyExtractor={(item) => item.id.toString()}
    />
  </ContainerStyled>
);

export default ClassList;
