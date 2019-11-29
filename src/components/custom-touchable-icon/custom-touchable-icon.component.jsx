import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ImageStyled } from './custom-touchable-icon.styles';

const CustomTouchableIcon = ({ isOpacity, sourceImage, ...otherProps }) => (
  <TouchableOpacity {...otherProps}>
    {
    sourceImage
      ? <ImageStyled isOpacity={isOpacity} source={sourceImage} />
      : null
    }
  </TouchableOpacity>
);

export default CustomTouchableIcon;
