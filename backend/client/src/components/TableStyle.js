import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-flow: column wrap;
  border: 2px solid black;
  padding: 2rem;
  margin-left: 1rem;
  margin-top: 1rem;
  max-width: 50vw;
  min-height: 50vh;
  box-shadow: 10px 10px lightblue;
`;

const Keyboard = styled.ul`
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
`
export { Card, Keyboard };
