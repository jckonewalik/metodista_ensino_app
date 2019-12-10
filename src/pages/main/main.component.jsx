import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StatusBar } from 'react-native';
import Routes from '../../routes';
import SignIn from '../../components/sign-in/sign-in.component';
import { checkUserSession } from '../../redux/user/user.actions';
import { currentUserSelector } from '../../redux/user/user.selectors';

const MainPage = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(currentUserSelector);
  useEffect(() => {
    dispatch(checkUserSession());
  }, [currentUser]);
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
