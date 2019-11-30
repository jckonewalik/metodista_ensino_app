import React, { useState } from 'react';
// import api from '../../services/api';
import { classes as classList } from '../../assets/data/database';
import Title from '../../components/title/title.component';
import ClassList from '../../components/class-list/class-list.component';
import RootContainer from '../../components/root-container/root-container.component';

const MyClassesPage = () => {
  const [classes] = useState(classList);
  return (
    <RootContainer>
      <ClassList classes={classes} />
    </RootContainer>
  );
};
MyClassesPage.navigationOptions = () => ({
  headerTitle: () => <Title title="Minhas Turmas" subtitle="João Carlos Konewalik de Souza" />,
});

export default MyClassesPage;
