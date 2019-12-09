import React from 'react';
import Title from '../../components/title/title.component';
import ClassListContainer from '../../components/class-list/class-list.component';
import RootContainer from '../../components/root-container/root-container.component';

const MyClassesPage = () => (
  <RootContainer>
    <ClassListContainer />
  </RootContainer>
);
MyClassesPage.navigationOptions = () => ({
  headerTitle: () => <Title title="Minhas Turmas" subtitle="João Carlos Konewalik de Souza" />,
});

export default MyClassesPage;
