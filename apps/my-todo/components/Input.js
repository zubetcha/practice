import { useEffect } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';

export const Input = ({ name, label, onChange, value }) => {
  const inputRef = useRef(null);

  return (
    <StyledInputContainer>
      <label htmlFor={name}>{label}</label>
      <input type='text' name={name} onChange={onChange} ref={inputRef} />
    </StyledInputContainer>
  );
};

const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;

  label {
  }

  input {
    width: 240px;
    padding: 8px;
  }
`;
