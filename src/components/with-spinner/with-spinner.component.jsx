import React from 'react';
import { ActivityIndicator } from 'react-native';
import { SpinnerContainer } from './with-spinner.styles';

export const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => (isLoading ? (
  <SpinnerContainer>
    <ActivityIndicator color="#F22333" size="large" />
  </SpinnerContainer>
) : (
  <WrappedComponent {...otherProps} />
));
