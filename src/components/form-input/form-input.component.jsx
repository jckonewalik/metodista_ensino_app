import React from 'react';
import {
  GroupContainer,
  FormInputStyled,
  FormInputIconLabelStyled,
} from './form-input.styles';

const FormInput = ({ icon, handleChange, ...otherProps }) => (
  <GroupContainer>
    <FormInputStyled onChange={handleChange} {...otherProps} />
    {icon ? (
      <FormInputIconLabelStyled source={icon} />
    ) : null}
  </GroupContainer>
);

export default FormInput;
