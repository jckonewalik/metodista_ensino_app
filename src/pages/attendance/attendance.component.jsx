import React from 'react';
import AttendanceOverview from '../../components/attendance-overview/attendance-overview.component';
import Title from '../../components/title/title.component';
import RootContainer from '../../components/root-container/root-container.component';
import AttendanceList from '../../components/attendance-list/attendance-list.component';
import { ButtonContainerStyled, CustomButtonStyled } from './attendance.styles';


class AttendancePage extends React.Component {
  static navigationOptions = () => ({
    headerTitle: () => <Title title="Lista de Presença" subtitle="Fundamentos da Fé - 2° sem / 2019" />,
  });

  render() {
    const { navigation } = this.props;
    return (
      <RootContainer>
        <AttendanceOverview />
        <AttendanceList />
        <ButtonContainerStyled>
          <CustomButtonStyled onPress={() => navigation.push('AttendanceComplement')}>
            SALVAR
          </CustomButtonStyled>
        </ButtonContainerStyled>
      </RootContainer>
    );
  }
}

export default AttendancePage;
