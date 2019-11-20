import React from 'react';
import ClassOverview from '../class-overview/class-overview.component';
import { ContainerStyled } from './class-list.styles';

const ClassList = () => (
  <ContainerStyled>
    <ClassOverview />
    <ClassOverview />
    <ClassOverview />
  </ContainerStyled>

);

export default ClassList;
