import React from 'react';
import './section.css'
import Cafe from './cafe.jpg';
import Sidebar from '../aside/sidebar';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const Main = () => {
  return (
    <Row>
      <Col xs={12} md={8} className="p-0">
        <section className="main d-flex text-justify ">

          <article>
            <div className="thumb">
              <img src={Cafe} width="100%" />
            </div>
            <h3 className="titulo pt-3 pb-2">Titulo del articulo</h3>
            <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum arcu vitae elementum curabitur vitae nunc. Aliquam faucibus purus in massa tempor nec. Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet. Lectus magna fringilla urna porttitor rhoncus dolor purus. Enim nec dui nunc mattis. Ut enim blandit volutpat maecenas. Neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. At in tellus integer feugiat scelerisque. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida. </p>

            <p>Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Et netus et malesuada fames ac turpis egestas maecenas. Vulputate ut pharetra sit amet. In eu mi bibendum neque egestas congue quisque egestas. Dui sapien eget mi proin. Tortor id aliquet lectus proin nibh nisl. Aliquet lectus proin nibh nisl condimentum id. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Vestibulum sed arcu non odio euismod lacinia at. Proin fermentum leo vel orci porta. Pellentesque habitant morbi tristique senectus et. Consequat ac felis donec et odio pellentesque diam volutpat. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Vulputate mi sit amet mauris. Vel pretium lectus quam id leo in vitae turpis.  </p>
          </article>
        </section>
      </Col>
      <Col xs={12} md={4} className="p-0">

        <Sidebar />
      </Col>


    </Row>
  )
}

export default Main;