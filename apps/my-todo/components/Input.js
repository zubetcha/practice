import styled from "styled-components"

export const Input = ({name, label}) => {
  return (
    <StyledContainer>
      <label htmlFor={name}>{label}</label>
      <input type="text" name={name} />
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;


  label {

  }

  input {
    width: 240px;
    padding: 8px;

  }
`

