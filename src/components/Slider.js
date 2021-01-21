import React from 'react';
import './../assets/style.css';
import Shoes from './../products.json';
import Carousel from 'react-bootstrap/Carousel';
import { Image, Col, Row, Container } from 'react-bootstrap';



let inter = Object.keys(Shoes).length * 1000;

function Silder() {
  return (
    <Container className="slide-container" fluid>
    <Row>
      <Col>
        <Carousel cla>
            {Object.keys(Shoes).map( keyName => {
                const shoes = Shoes[keyName];
                console.log(inter);
                inter = inter - 1000;
                if(inter > 0){
                  return (
                      <Carousel.Item key={keyName} interval={inter}>
                          <Image
                              className="d-block slider-img"
                              src={shoes.img}
                              alt="First slide"
                              fluid 
                          />
                      </Carousel.Item>
                  );
                }else{
                  return (
                    <Carousel.Item key={keyName}>
                        <Image
                            className="d-block slider-img"
                            src={shoes.img}
                            alt="First slide"
                            fluid 
                        />
                    </Carousel.Item>
                );
                }
            })}
        </Carousel>
      </Col>
    </Row>
  </Container>
    
    
  );
}

export default Silder;

