import React from "react";

export default function Table(props) {
  const { token, userId } = props;
  let practices 
  console.log("token", token);
  fetch(`http://localhost:3000/api/practice/${userId}`, {
    mode: "cors",
    method: "get",
    Authorization: `Bearer ${token}`,
  })
    .then((result) => result.json())
    .then((data) => {
      console.log("this is data:", data); 
      practices = data
      return practices});
  
  return (
    <div>
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li>
            <a href="#">{practices[0].scale}</a>
          </li>
          <li>
            <a href="#">Documentation</a>
          </li>
          <li>
            <a href="#">Components</a>
          </li>
          <li class="is-active">
            <a href="#" aria-current="page">
              Breadcrumb
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
