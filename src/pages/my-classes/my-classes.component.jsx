import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Title from '../../components/title/title.component';
import ClassList from '../../components/class-list/class-list.component';
import RootContainer from '../../components/root-container/root-container.component';

const MyClassesPage = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    async function getClasses() {
      const resp = await api.get('/classes');
      setClasses(resp.data);
    }

    getClasses();
  }, []);

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
