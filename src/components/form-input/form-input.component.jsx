import React from 'react';
import {
  GroupContainer,
  FormInputStyled,
  FormInputIconLabelStyled,
} from './form-input.styles';

const FormInput = ({ icon, ...otherProps }) => (
  <GroupContainer>
    <FormInputStyled {...otherProps} />
    {icon ? (
      <FormInputIconLabelStyled source={icon} />
    ) : null}
  </GroupContainer>
);

export default FormInput;
