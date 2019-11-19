import React from 'react';
import { View } from 'react-native';
import Title from '../../components/title/title.component';

class MyClassesPage extends React.Component {
  static navigationOptions = () => ({
    headerTitle: () => <Title title="Minhas Turmas" subtitle="João Carlos Konewalik de Souza" />,
  });


  render() {
    return (
      <View />
    );
  }
}

export default MyClassesPage;
