import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  background: #fff;
  border-radius: 0.5rem;
  padding: 3rem;
  max-width: 800px;

  @media (min-width: 992px) {
    margin-top: 10rem;
  }
  h1 {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    padding-left: 4rem;

    /* Quote Marks */
    &::before {
      content: open-quote;
      font-size: 9rem;
      color: #000;
      position: absolute;
      left: -1rem;
      top: -2rem;
    }
  }

  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: right;
    font-size: 1.2rem;
    color: #666;
    margin-top: 2rem;
    font-weight: bold;
  }
`;

const Quote = ({ data }) => {
  //Render component only when exists data
  //check key of the object
  if (Object.keys(data).length === 0) return null;
  return (
    <Container>
      <h1>{data.quote}</h1>
      <p>-{data.author}</p>
    </Container>
  );
};

export default Quote;
