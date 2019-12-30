import styled, { css } from 'styled-components/native';
import CustomText from '../custom-text/custom-text.component';
import { Platform } from 'react-native';

const androidHeader = css`
  margin-left: 10px;
`;
const font = css`
  color: #fff;
`;

export const ContainerStyled = styled.View`
`;

export const TitleStyled = styled(CustomText)`
  ${font}
  ${Platform.OS !== 'ios' ? androidHeader : ''}
  font-size: 20;
  font-weight: 700;
`;

export const SubTitleStyled = styled(CustomText)`
  ${font}
  ${Platform.OS !== 'ios' ? androidHeader : ''}
  font-size: 14;
  font-weight: 300;
`;
