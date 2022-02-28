import React, { useState, useEffect } from "react";

export default function Table({ userId }) {

  const [practice, setPractice] = useState([]);

  const url = `http://localhost:8081/api/practice/${userId}`;
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          const { url, status, statusText } = res;
          console.log(`${status} ${statusText} in fetch ${url}`);
        }
        console.log("res:", res);
        return res.json();
      })
      .then((data) => {
        console.log("fetch data:", data);
        setPractice(data);
      });
  }, []);

  console.log("userId:", userId);
  return (
    <div>
      <nav class="breadcrumb" aria-label="breadcrumbs">
       { practice && <ul>
          {practice.map((practices) => (
            <li key={practices.id}>
              <a>{practices.scale}</a>
            </li>
          ))}
        </ul>
}
      </nav>
    </div>
  );
}
