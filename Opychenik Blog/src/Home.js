import React from 'react';
import Slider from './Components/Slider'
import Jumbotron from './Components/Jumbotron'
import nature from './img/nature1-main.jpg';
import nature1 from './img/nature-main.jpg';
import nature2 from './img/nature2-main.jpg';
import nature3 from './img/nature3-main.jpg';
import nature4 from './img/nature4-main.jpg';
import nature5 from './img/nature5-main.jpg';
import nature_jumbo from './img/Jumbo-nature.jpg';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';

export const Home = () => (
  <>
    <Slider />
    <Container style = {{paddingTop: '2rem', paddingBottom: '2rem'}}>
      <Row>
        <Col>
          <Card style = {{width: '19rem'}}>
            <Card.Img variant="top" src = {nature} />
            <Card.Body>
              <Card.Title>WebDev Blog</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </Card.Text>
              <Button variant = "primary">Learn more</Button>
            </Card.Body>

          </Card>
        </Col>

        <Col>
          <Card style = {{width: '19rem' , marginLeft: '45px'}}>
            <Card.Img variant="top" src = {nature1} />
            <Card.Body>
              <Card.Title>WebDev Blog</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </Card.Text>
              <Button variant = "primary">Learn more</Button>
            </Card.Body>

          </Card>
        </Col>

        <Col>
          <Card style = {{width: '19rem' , marginLeft: '70px'}}>
            <Card.Img variant="top" src = {nature2} />
            <Card.Body>
              <Card.Title>WebDev Blog</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </Card.Text>
              <Button variant = "primary">Learn more</Button>
            </Card.Body>

          </Card>
        </Col>
      </Row>

      <Row className = "mt-5">
        <Col>
          <Card style = {{width: '19rem'}}>
            <Card.Img variant="top" src = {nature3} />
            <Card.Body>
              <Card.Title>WebDev Blog</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </Card.Text>
              <Button variant = "primary">Learn more</Button>
            </Card.Body>

          </Card>
        </Col>

        <Col>
          <Card style = {{width: '19rem' , marginLeft: '45px'}}>
            <Card.Img variant="top" src = {nature4} />
            <Card.Body>
              <Card.Title>WebDev Blog</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </Card.Text>
              <Button variant = "primary">Learn more</Button>
            </Card.Body>

          </Card>
        </Col>

        <Col>
          <Card style = {{width: '19rem' , marginLeft: '70px'}}>
            <Card.Img variant="top" src = {nature5} />
            <Card.Body>
              <Card.Title>WebDev Blog</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </Card.Text>
              <Button variant = "primary">Learn more</Button>
            </Card.Body>

          </Card>
        </Col>
      </Row>
    </Container>

    <Jumbotron />

    <Container style ={{marginBottom: '30px'}}>
      <Row className="mt-5">
        <Col md={7}>
          <img src={nature_jumbo} height={400} alt=""/>
        </Col>
        <Col md={5}>
          <h2>Opychenik Blog</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Facilis odit beatae sint dicta delectus ipsam
            consequuntur maxime, voluptatibus quaerat numquam
            quia quasi nobis, reiciendis ad ipsa hic accusamus
            eaque labore!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Facilis odit beatae sint dicta delectus ipsam
            consequuntur maxime, voluptatibus quaerat numquam
            quia quasi nobis, reiciendis ad ipsa hic accusamus
            eaque labore!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Facilis odit beatae sint dicta delectus ipsam
            consequuntur maxime, voluptatibus quaerat numquam
            quia quasi nobis, reiciendis ad ipsa hic accusamus
            eaque labore!
          </p>
        </Col>
      </Row>
    </Container>
  </>
)
