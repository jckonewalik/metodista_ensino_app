import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import {
  ContainerStyled,
  ClassContainerStyled,
  ClassNameStyled,
  ClassDescriptionStyled,
} from './class-overview.styles';
import Amount from '../amount/amount.component';
import { setCurrentClass } from '../../redux/class/class.actions';

const ClassOverview = ({ classItem, navigation, setCurrentClass }) => {
  const handleClick = async () => {
    await setCurrentClass(classItem);
    navigation.push('Attendance');
  };
  return (
    <TouchableOpacity onPress={handleClick}>
      <ContainerStyled>
        <ClassContainerStyled>
          <ClassNameStyled>{classItem.name}</ClassNameStyled>
          <ClassDescriptionStyled>{classItem.description}</ClassDescriptionStyled>
        </ClassContainerStyled>
        <Amount amount={classItem.studentsAmount} label="ALUNOS" />
      </ContainerStyled>
    </TouchableOpacity>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentClass: (currentClass) => dispatch(setCurrentClass(currentClass)),
});

export default compose(
  connect(null, mapDispatchToProps),
  withNavigation,
)(ClassOverview);
