import React from 'react';
import { ContainerStyled, AmountStyled, LabelStyled } from './amount.styles';

const Amount = ({ amount, label }) => (
  <ContainerStyled>
    <AmountStyled>{amount}</AmountStyled>
    <LabelStyled>{label}</LabelStyled>
  </ContainerStyled>
);

export default Amount;
