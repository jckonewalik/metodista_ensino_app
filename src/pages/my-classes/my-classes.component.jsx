import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getClassesStart } from '../../redux/class/class.actions';
import Title from '../../components/title/title.component';
import ClassListContainer from '../../components/class-list/class-list.component';
import RootContainer from '../../components/root-container/root-container.component';

const MyClassesPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {    
    dispatch(getClassesStart());
  }, []);
  return (
    <RootContainer>
      <ClassListContainer />
    </RootContainer>
  );
};
MyClassesPage.navigationOptions = () => ({
  headerTitle: () => <Title title="Minhas Turmas" subtitle="" />,
});

export default MyClassesPage;
