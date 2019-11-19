import React from 'react';
import Title from '../../components/title/title.component';
import ClassList from '../../components/class-list/class-list.component';

class MyClassesPage extends React.Component {
  static navigationOptions = () => ({
    headerTitle: () => <Title title="Minhas Turmas" subtitle="João Carlos Konewalik de Souza" />,
  });


  render() {
    return (
      <ClassList />
    );
  }
}

export default MyClassesPage;
