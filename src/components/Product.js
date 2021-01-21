import React from 'react';
import Shoes from './../products.json';
import { Image, Col, Row, Container } from 'react-bootstrap';

function Product() {
  console.log(Shoes);
  return (
      <Container fluid>
      <Row>
        {Object.keys(Shoes).map( keyName => {
            const shoes = Shoes[keyName];
            return (
              <Col md={4}>
                <div className='product'>
                  <Image fluid src={shoes.img} alt="" height="400" width="400"/>
                  <h2>{shoes.name}</h2>
                </div>
              </Col>
            )
          })}
      </Row>
    </Container>
  );
}

export default Product;
