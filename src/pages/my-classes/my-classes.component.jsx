import React from 'react';
import Title from '../../components/title/title.component';
import ClassList from '../../components/class-list/class-list.component';
import { ContainerStyled } from './my-classes.styles';

class MyClassesPage extends React.Component {
  static navigationOptions = () => ({
    headerTitle: () => <Title title="Minhas Turmas" subtitle="João Carlos Konewalik de Souza" />,
  });


  render() {
    return (
      <ContainerStyled>
        <ClassList />
      </ContainerStyled>
    );
  }
}

export default MyClassesPage;
