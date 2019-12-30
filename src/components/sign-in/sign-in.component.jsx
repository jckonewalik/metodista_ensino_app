import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableOpacity, Alert, YellowBox } from 'react-native';
import { emailSignInStart } from '../../redux/user/user.actions';
import FormInput from '../form-input/form-input.component';
import {
  MainContainerStyled,
  ButtonsContainerStyled,
  ImageContainerStyled,
  OptionStyled,
  LoginButtonStyled,
  ImageStyled,
  InputContainerStyled,
} from './sign-in.styles';
import { errorMessageSelector } from '../../redux/user/user.selectors';
import logo from '../../assets/metodista.png';
import email from '../../assets/email.png';
import lock from '../../assets/lock.png';

const SignIn = () => {
  const errorMessage = useSelector(errorMessageSelector);
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

  const showErrorMessage = () => {
    if (errorMessage.hasError) {
      Alert.alert(
        'Erro ao efetuar Login',
        `${errorMessage.message}`,
        [
          { text: 'OK' },
        ],
        { cancelable: false },
      );
    }
  };

  useEffect(() => YellowBox.ignoreWarnings(['Setting a timer']), []);
  useEffect(() => showErrorMessage(), [errorMessage]);

  const handleSubmit = () => {
    dispatch(emailSignInStart(userCredentials));
  };

  const handlePasswordForgot = async () => {
    let reponseMessage = '';
    try { 
      const response = await api.put('/users/reset-password', { email: userCredentials.email });
      const { message } = await response.data;
      reponseMessage = message;
    } catch (error) {
      const responseError = await error.response.data;
      reponseMessage = responseError.message;
    }
    Alert.alert(
      '',
      `${reponseMessage}`,
      [
        { text: 'OK' },
      ],
      { cancelable: false },
    );
  };

  const handleEmailChange = (text) => {
    setUserCredentials({ ...userCredentials, email: text });
  };
  const handlePasswordChange = (text) => {
    setUserCredentials({ ...userCredentials, password: text });
  };
  return (
    <MainContainerStyled>
      <ImageContainerStyled>
        <ImageStyled source={logo} />
      </ImageContainerStyled>
      <InputContainerStyled>
        <FormInput
          icon={email}
          keyboardType="email-address"
          placeholder="E-mail"
          value={userCredentials.email}
          onChangeText={handleEmailChange}
        />
        <FormInput
          icon={lock}
          placeholder="Password"
          secureTextEntry
          value={userCredentials.password}
          onChangeText={handlePasswordChange}
        />
      </InputContainerStyled>
      <ButtonsContainerStyled>
        <LoginButtonStyled onPress={handleSubmit}>Login</LoginButtonStyled>
        <TouchableOpacity onPress={handlePasswordForgot}>
          <OptionStyled>Esqueceu sua senha?</OptionStyled>
        </TouchableOpacity>
      </ButtonsContainerStyled>
    </MainContainerStyled>
  );
};
export default SignIn;
