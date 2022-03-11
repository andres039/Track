import React from 'react'
import Practice from './practice'
import Table from './table'
import { Container, Cards } from "./MainStyle.js"

const Main = ({userId, setUpdated, updated, token, isLoggedIn}) => {
  return (
    <Container>
      {isLoggedIn && <Cards><Practice userId={userId} setUpdated={setUpdated} /></Cards>}{" "}
    {isLoggedIn && (
      <Cards>
      <Table
        token={token}
        userId={userId}
        setUpdated={setUpdated}
        updated={updated}
      />
      </Cards>
    )}</Container>
  )
}

export default Main