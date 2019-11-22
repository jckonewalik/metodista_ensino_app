import React from 'react';
import CustonText from '../custom-text/custom-text.component';
import { ContainerStyled, ConfirmImageStyled } from './attendance-item.styles';
import confirm from '../../assets/confirm.png';
import cancel from '../../assets/cancel.png';

const AttendanceItem = () => (
  <ContainerStyled>
    <CustonText>Attendance Item</CustonText>
    <ConfirmImageStyled source={cancel} />
    <ConfirmImageStyled source={confirm} />
  </ContainerStyled>
);

export default AttendanceItem;
