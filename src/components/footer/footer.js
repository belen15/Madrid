import React, { Fragment } from 'react';
import './footer.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Footer = () => {
  return (
    <Row className="footer d-md-flex justify-content-between">
      <Col xs={12} md={9} className="autor">
        
          <p className="mb-0">Creado por Belen Carte - 2021</p>
      </Col>
      <Col xs={12} md={3}className="redes">
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
      </Col>


      
    </Row>
  )
}

export default Footer;