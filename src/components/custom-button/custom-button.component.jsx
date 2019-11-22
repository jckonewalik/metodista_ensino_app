import React from 'react';
import { ContainerStyled, ButtonStyled, LabelStyled } from './custom-button.styles';

const CustomButton = ({ children, ...otherProps }) => (
  <ContainerStyled>
    <ButtonStyled {...otherProps}>
      <LabelStyled>{children}</LabelStyled>
    </ButtonStyled>
  </ContainerStyled>
);

export default CustomButton;
