import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
const Label = styled.label`
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: 300;
`;
const Field = styled.input`
  background: transparent;
  border: none;
  border-bottom: 1px solid white;
  outline: none;
  color: white;
  font-size: 18px;
  padding: 5px 0;
  margin-bottom: 10px;
`;

const Input = ({ label = "Name", type = "text", handleChange = null, id }) => {
  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <Field
        id={id}
        type={type}
        name={label.toLowerCase()}
        onChange={handleChange}
      />
    </Container>
  );
};

export default Input;

//Label
//type
