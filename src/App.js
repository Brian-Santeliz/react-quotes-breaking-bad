import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Quote from "./components/Quote";

//emotion to button
const Button = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  margin: 3rem 0;
  font-size: 2rem;
  border: 2px solid #000;
  padding: 1rem 3rem;
  transition:background-size 4s all;
  &:hover{
    cursor:pointer;
    background-size:400px;
  }
`;
//Container Styled
const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

function App() {
  const [data, setData] = useState([]);

  //Query to the API
  const handleClick = async () => {
    const url = "https://breaking-bad-quotes.herokuapp.com/v1/quotes";
    const response = await fetch(url);
    const data = await response.json();
    setData(data[0]);
  };
  //When compoment mounted show a quote 
  useEffect(() => {
    handleClick();
  }, []);

  return (
    <Container>
      <Quote data={data} />
      <Button onClick={() => handleClick()}>Get Quote</Button>
    </Container>
  );
}

export default App;
