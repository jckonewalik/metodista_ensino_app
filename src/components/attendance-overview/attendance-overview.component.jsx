import React from 'react';
import { useSelector } from 'react-redux';
import { ContainerStyled } from './attendance-overview.styles';
import Amount from '../amount/amount.component';
import { selectStudentsRemaining, selectStudentsPresents, selectStudentsMissing } from '../../redux/attendance/attendance.selectors';

const AttendanceOverview = () => {
  const studentsRemaining = useSelector(selectStudentsRemaining);
  const studentsPresents = useSelector(selectStudentsPresents);
  const studentsMissing = useSelector(selectStudentsMissing);
  return (
    <ContainerStyled>
      <Amount amount={studentsRemaining} label="Restantes" />
      <Amount amount={studentsPresents} label="Presentes" />
      <Amount amount={studentsMissing} label="Faltas" />
    </ContainerStyled>
  );
};

export default AttendanceOverview;
