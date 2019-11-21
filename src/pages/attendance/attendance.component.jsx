import React from 'react';
import AttendanceOverview from '../../components/attendance-overview/attendance-overview.component';
import Title from '../../components/title/title.component';
import RootContainer from '../../components/root-container/root-container.component';
import AttendanceList from '../../components/attendance-list/attendance-list.component';

class AttendancePage extends React.Component {
  static navigationOptions = () => ({
    headerTitle: () => <Title title="Lista de Presença" subtitle="Fundamentos da Fé - 2° sem / 2019" />,
  });

  render() {
    return (
      <RootContainer>
        <AttendanceOverview />
        <AttendanceList />
      </RootContainer>
    );
  }
}

export default AttendancePage;
