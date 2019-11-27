import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ImageStyled } from './custom-touchable-icon.styles';

const CustomTouchableIcon = ({ sourceImage, ...otherProps }) => (
  <TouchableOpacity {...otherProps}>
    {
    sourceImage
      ? <ImageStyled source={sourceImage} />
      : null
    }
  </TouchableOpacity>
);

export default CustomTouchableIcon;
