import React from 'react';
import { ContainerStyled, TitleStyled, SubTitleStyled } from './title.styles';

const Title = ({ title, subtitle }) => (
  <ContainerStyled>
    <TitleStyled>{title}</TitleStyled>
    <SubTitleStyled>{subtitle}</SubTitleStyled>
  </ContainerStyled>
);

export default Title;
