import React from "react";

export default function Table(props) {
  const {token, userId} = props
  console.log('token', token);
  fetch(`http://localhost:3000/api/practice/${userId}`, {
    mode: "cors",
    method: "get",
    Authorization: `Bearer ${token}`
  })
    .then((result) => result.json())
    .then((data) => console.log(data));
  return <></>;
}
