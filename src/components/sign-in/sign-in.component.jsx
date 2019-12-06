import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableOpacity, Alert } from 'react-native';
import { emailSignInStart } from '../../redux/user/user.actions';
import FormInput from '../form-input/form-input.component';
import CustomTouchableIcon from '../custom-touchable-icon/custom-touchable-icon.component';
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
import google from '../../assets/google.png';
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

  useEffect(() => showErrorMessage(), [errorMessage]);

  const handleSubmit = () => {
    dispatch(emailSignInStart(userCredentials));
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
        <TouchableOpacity>
          <OptionStyled>Esqueceu sua senha?</OptionStyled>
        </TouchableOpacity>
        <OptionStyled>Login com</OptionStyled>
        <CustomTouchableIcon sourceImage={google} />
      </ButtonsContainerStyled>
    </MainContainerStyled>
  );
};
export default SignIn;
