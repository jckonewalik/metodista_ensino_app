import React from 'react';
import Title from '../../components/title/title.component';
import ClassList from '../../components/class-list/class-list.component';
import RootContainer from '../../components/root-container/root-container.component';

class MyClassesPage extends React.Component {
  static navigationOptions = () => ({
    headerTitle: () => <Title title="Minhas Turmas" subtitle="João Carlos Konewalik de Souza" />,
  });

  render() {
    return (
      <RootContainer>
        <ClassList />
      </RootContainer>
    );
  }
}

export default MyClassesPage;
