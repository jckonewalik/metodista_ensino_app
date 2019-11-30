import styled from 'styled-components/native';
import RootContainer from '../../components/root-container/root-container.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import CustomText from '../../components/custom-text/custom-text.component';

export const RootContainerStyled = styled(RootContainer)`
  justify-content: space-between;
`;

export const BodyStyled = styled.View`
  margin-top: 50px;
`;

export const FooterStyled = styled.View`
  margin-bottom: 50px;
  align-items: flex-end;
`;

export const SaveButtonStyled = styled(CustomButton)`
  width: 120px;
`;

export const LabelStyled = styled(CustomText)`
  margin-top: 40px;
  margin-left: 10px;
  font-size: 14;
  font-weight: 700;
  text-transform: uppercase;
`;
