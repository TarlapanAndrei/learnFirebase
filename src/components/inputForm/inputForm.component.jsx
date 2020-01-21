import React from 'react';
import { InputContainer, InputInput } from './inputForm.styled';

const FormInput = ({name, value, onChange, label}) =>(
  <InputContainer>
    <label>
    <InputInput 
    name={name}
    value={value}
    onChange={onChange}
    />
    {label}
    </label>
  </InputContainer>
)
export default FormInput;