import React from 'react';
import { ViewStyled, TitleStyled, SubTitleStyled } from './title.styles';

const Title = ({ title, subtitle }) => (
  <ViewStyled>
    <TitleStyled>{title}</TitleStyled>
    <SubTitleStyled>{subtitle}</SubTitleStyled>
  </ViewStyled>
);

export default Title;
