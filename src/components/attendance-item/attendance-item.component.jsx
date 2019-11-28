import React from 'react';
import {
  ContainerStyled, ButtonContainerStyled, NamedStyled,
} from './attendance-item.styles';
import CustomTouchableIcon from '../custom-touchable-icon/custom-touchable-icon.component';
import confirm from '../../assets/confirm.png';
import cancel from '../../assets/cancel.png';

const AttendanceItem = ({ student }) => (
  <ContainerStyled>
    <NamedStyled>{`${student.firstName} ${student.lastName}`}</NamedStyled>
    <ButtonContainerStyled>
      <CustomTouchableIcon sourceImage={cancel} />
      <CustomTouchableIcon sourceImage={confirm} />
    </ButtonContainerStyled>
  </ContainerStyled>
);

export default AttendanceItem;
