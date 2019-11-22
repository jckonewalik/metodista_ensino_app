import React from 'react';
import { ContainerStyled, TitleStyled, SubTitleStyled } from './title.styles';

const Title = ({ title, subtitle }) => (
  <ContainerStyled>
    <TitleStyled>
      {title.length > 25
        ? title.substring(0, 25).concat('...')
        : title}
    </TitleStyled>
    <SubTitleStyled>{subtitle}</SubTitleStyled>
  </ContainerStyled>
);

export default Title;
