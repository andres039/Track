import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  max-width: 100vw;
  justify-content: center;
  align-items: center;
`;
const Form = styled.form`
  display: flex;
  flex-flow: column;
  max-width: 45vw;
  padding-top: 3rem;
`;

const Label = styled.label`
  display: block;
  font-size: larger;
  color: rgb(12, 11, 11);
  padding: 5px;
`;
const Title = styled.h1`
  font-size: 3rem;
  color: rgb(195, 63, 63);
`;
const Input = styled.input`
  font-size: larger;
  padding: 5px;
  margin: 2px;
`;

const Button = styled.button`
  color: rgb(14, 13, 13);
  background-color: red;
  border-radius: 5px;
  display: block;
  padding: 5px;
  margin: 10px auto;
`;
export { Container, Form, Label, Title, Input, Button };
