import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import FormInput from '../../components/form-input/form-input.component';
import CustomTouchableIcon from '../../components/custom-touchable-icon/custom-touchable-icon.component';
import {
  MainContainerStyled,
  ButtonsContainerStyled,
  ImageContainerStyled,
  OptionStyled,
  LoginButtonStyled,
  ImageStyled,
  InputContainerStyled,
} from './sign-in.styles';
import logo from '../../assets/metodista.png';
import google from '../../assets/google.png';
import email from '../../assets/email.png';
import lock from '../../assets/lock.png';

const SignInPage = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });

  const handleEmailChange = (event) => {
    setUserCredentials({ ...userCredentials, email: event.text });
  };
  const handlePasswordChange = (event) => {
    setUserCredentials({ ...userCredentials, password: event.text });
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
          handleChange={handleEmailChange}
        />
        <FormInput
          icon={lock}
          placeholder="Password"
          secureTextEntry
          value={userCredentials.password}
          handleChange={handlePasswordChange}
        />
      </InputContainerStyled>
      <ButtonsContainerStyled>
        <LoginButtonStyled>Login</LoginButtonStyled>
        <TouchableOpacity>
          <OptionStyled>Esqueceu sua senha?</OptionStyled>
        </TouchableOpacity>
        <OptionStyled>Login com</OptionStyled>
        <CustomTouchableIcon sourceImage={google} />
      </ButtonsContainerStyled>
    </MainContainerStyled>
  );
};
export default SignInPage;
