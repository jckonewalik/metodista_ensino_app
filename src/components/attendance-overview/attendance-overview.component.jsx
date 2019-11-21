import React from 'react';
import { ContainerStyled } from './attendance-overview.styles';
import Amount from '../amount/amount.component';

const AttendanceOverview = () => (
  <ContainerStyled>
    <Amount amount="05" label="Restantes" />
    <Amount amount="00" label="Presentes" />
    <Amount amount="00" label="Faltas" />
  </ContainerStyled>
);

export default AttendanceOverview;
