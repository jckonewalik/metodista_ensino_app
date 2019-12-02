import React from 'react';
import { Picker, TouchableWithoutFeedback } from 'react-native';
import {
  ContainerStyled, ContentContainerStyled, LabelStyled, ValueStyled,
} from './custom-picker-button.styles';

const CustomPickerButton = (props) => {
  const {
    label, value, options, handleChange, handlePress, show,
  } = props;
  const findById = (id) => options.filter((option) => option.id === id)[0];
  const onValueChange = (itemValue) => {
    handleChange(itemValue);
  };
  return (
    <ContainerStyled>
      <TouchableWithoutFeedback onPress={() => handlePress(!show)}>
        <ContentContainerStyled>
          {
            value ? (
              <>
                <LabelStyled>{label}</LabelStyled>
                <ValueStyled>{value && value.name}</ValueStyled>
              </>
            )
              : <LabelStyled>{`SELECIONAR ${label}`}</LabelStyled>
          }
        </ContentContainerStyled>

      </TouchableWithoutFeedback>
      {show
      && (
        <Picker
          selectedValue={findById(value && value.id)}
          onValueChange={onValueChange}
        >
          <Picker.Item
            label="Selecione"
            value={null}
          />
          {
          options.map((option) => (
            <Picker.Item
              key={option.id}
              label={option.name}
              value={option}
            />
          ))
        }
        </Picker>
      )}
    </ContainerStyled>
  );
};

export default CustomPickerButton;
