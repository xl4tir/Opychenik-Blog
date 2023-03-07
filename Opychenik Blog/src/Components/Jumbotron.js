import React from 'react';
import {Container} from 'react-bootstrap';
import styled from 'styled-components';
import nature from '../img/nature.jpg';

const Styles = styled.div `
  .jumbo{
    background: url(${nature}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 400px;
    position: relative;
    z-index: -2;
  }

  .overlay{
    background-color: #000;
    opacity: 0.7;
    position: absolute;
    top: 0;
    left:0;
    bottom:0;
    right:0;
    z-index: -1;
  }
`


export default function Jumbotron(){
  return (
    <Styles>
      <div className="jumbo">
        <div className="overlay"></div>
        <Container bg="dark" variant="dark">
          <h1 className="pt-5">Opychenik Blog</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Dolore similique totam voluptate est vero,
            facere inventore? Aperiam dolorum, beatae in ipsa
            inventore dolore tempore, impedit aspernatur,
            ipsum labore ratione excepturi.Dolore similique totam voluptate est vero,
            facere inventore? Aperiam dolorum, beatae in ipsa
            inventore dolore tempore, impedit aspernatur,
            ipsum labore ratione excepturi.Dolore similique totam voluptate est vero,
            facere inventore? Aperiam dolorum, beatae in ipsa
            inventore dolore tempore, impedit aspernatur,
            ipsum labore ratione excepturi.Dolore similique totam voluptate est vero,
            facere inventore? Aperiam dolorum, beatae in ipsa
            inventore dolore tempore, impedit aspernatur,
            ipsum labore ratione excepturi.
          </p>
        </Container>
      </div>
     </Styles>


)

}
