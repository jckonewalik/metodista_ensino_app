import React from 'react';
import { useSelector } from 'react-redux';
import { StatusBar } from 'react-native';
import Routes from '../../routes';
import SignIn from '../../components/sign-in/sign-in.component';
import { currentUserSelector } from '../../redux/user/user.selectors';

const MainPage = () => {
  const currentUser = useSelector(currentUserSelector);
  return (
    !currentUser ? <SignIn />
      : (
        <>
          <StatusBar barStyle="light-content" backgroundColor="#F22333" />
          <Routes />
        </>
      ));
};
export default MainPage;
