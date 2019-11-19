import React from 'react';
import { View, Text } from 'react-native';
import Title from '../../components/title/title.component';

class AttendanceListPage extends React.Component {
  static navigationOptions = () => ({
    headerTitle: () => <Title title="Lista de Presença" subtitle="Fundamentos da Fé - 2° sem / 2019" />,
  });

  render() {
    return (
      <View>
        <Text>Attendance List</Text>
      </View>
    );
  }
}

export default AttendanceListPage;
