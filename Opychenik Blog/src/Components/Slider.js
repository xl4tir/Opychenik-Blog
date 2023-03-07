import React from 'react';
import {Carousel} from 'react-bootstrap';
import nature from '../img/nature.jpg';
import nature1 from '../img/nature1.jpg';
import nature2 from '../img/nature2-main.jpg';

export default function NaviBar(){
  return (

        <Carousel>
            <Carousel.Item style={{'height': '600px'}}>
              <img src={nature} clasName="d-block w-100" alt="Frist slide"/>
              <Carousel.Caption>
                <h3>Opychenik Blog</h3>
                <p>Do do nostrub es aliqua</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{'height': '600px'}}>
              <img src={nature1} clasName="d-block w-100" alt="Frist slide"/>
              <Carousel.Caption>
                <h3>Opychenik Blog</h3>
                <p>Do do nostrub es aliqua</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{'height': '600px'}}>
              <img src={nature2} clasName="d-block w-100" alt="Frist slide"/>
              <Carousel.Caption>
                <h3>Opychenik Blog</h3>
                <p>Do do nostrub es aliqua</p>
              </Carousel.Caption>
            </Carousel.Item>


        </Carousel>


)}
