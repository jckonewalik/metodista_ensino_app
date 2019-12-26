import React from 'react';
import { useDispatch } from 'react-redux';
import {
  ContainerStyled, ButtonContainerStyled, NamedStyled,
} from './attendance-item.styles';
import CustomTouchableIcon from '../custom-touchable-icon/custom-touchable-icon.component';
import { setAppointment } from '../../redux/attendance/attendance.actions';
import confirm from '../../assets/confirm.png';
import cancel from '../../assets/cancel.png';

const AttendanceItem = ({ appointment }) => {
  const dispatch = useDispatch();

  const handleCheck = async (status) => {
    await dispatch(setAppointment({ ...appointment, status }));
  };
  const name = `${appointment.student.firstName} ${appointment.student.lastName}`;
  return (
    <ContainerStyled>
      <NamedStyled>{ name.length > 25
        ? name.substring(0, 25).concat('...')
        : name}
      </NamedStyled>
      <ButtonContainerStyled>
        <CustomTouchableIcon
          isOpacity={appointment.status !== null && appointment.status}
          onPress={() => handleCheck(false)}
          sourceImage={cancel}
        />
        <CustomTouchableIcon
          isOpacity={appointment.status !== null && !appointment.status}
          onPress={() => handleCheck(true)}
          sourceImage={confirm}
        />
      </ButtonContainerStyled>
    </ContainerStyled>
  );
};

export default AttendanceItem;
