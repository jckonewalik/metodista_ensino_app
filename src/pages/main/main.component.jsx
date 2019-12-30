import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StatusBar } from 'react-native';
import Routes from '../../routes';
import SignIn from '../../components/sign-in/sign-in.component';
import { currentUserSelector } from '../../redux/user/user.selectors';
import { checkUserSessionStart } from '../../redux/user/user.actions';

const MainPage = () => {
  const currentUser = useSelector(currentUserSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSessionStart())
  },[]);
  
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
