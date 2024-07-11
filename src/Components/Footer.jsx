import React from 'react';
import { Container, Row, Col, Image, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useState } from 'react';
import FooterLogo from '../Logo/DreamLogo.png'

const MyFooter = (props) => {
  return (
    <footer className="footer-top bg-dark text-light ">
      {props.isLogin ?(<Container className='p-4' >
        <Row className='justify-content-between'>
          <Col lg={4} md={6}>
            <div className="footer-info">
              <h3 className='text-warning'>National Health Mission</h3>
              <p>
                GVI Campus <br />
                Namkum Ranchi <br />
                <strong>Tel:</strong> 0651 - 2261000 <br />
                <strong>Fax:</strong> 0651-226856 <br />
                <strong>Email:</strong> chjharkhand@gmail.com <br />
              </p>
              <div className="social-links mt-3">
                <a href="#" className="facebook"><i className="fab fa-facebook"></i></a>
                <a href="#" className="twitter"><i className="fab fa-twitter"></i></a>
                <a href="#" className="youtube"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
          </Col>

          <Col lg={4} md={6}> {/* Span the full width on smaller screens (optional) */}
            <iframe
              width="100%" // Responsive width
              height="300"
              style={{ border: '0' }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d58610.28368996561!2d85.369499!3d23.346843!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e23bcb44e265%3A0x9c7f991c20a07efb!2sJharkhand%20Rural%20Health%20Mission%20Society%20JRHMS!5e0!3m2!1sen!2sin!4v1717834601830!5m2!1sen!2sin"
            />
          </Col>

          <Col lg={4} md={6}>
            <Card>
              <Card.Body>
                <Card.Title>Quick Links</Card.Title>
                <ListGroup flush>
                  <ListGroupItem>
                    <i className="bx bx-chevron-right"></i>
                    <a href="/Home/Index">Home</a>
                  </ListGroupItem>
                  <ListGroupItem>
                    <i className="bx bx-chevron-right"></i>
                    <a href="/Home/Index#about" className="pagescroll">
                      About
                    </a>
                  </ListGroupItem>
                  <ListGroupItem>
                    <i className="bx bx-chevron-right"></i>
                    <a href="/Home/Index#message" className="pagescroll">
                      Message from Mission Director
                    </a>
                  </ListGroupItem>
                  <ListGroupItem>
                    <i className="bx bx-chevron-right"></i>
                    <a href="/Resources/ShowResource">Resources</a>
                  </ListGroupItem>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>

          
        </Row>
      </Container>):(<></>)}
      <Container style={{ borderTop: '5px solid #E4A11B',}} fluid className="py-3 bg-secondary mt-0">
        <Row>
          <Col xl={3} sm={3} col={3} pt={3}>
            <a href="https://www.dhanushinfotech.com/Pages/index.htm" target="_blank">
              <Image  style={{height:"40px", margin:'2px'}}  src={FooterLogo} alt="DreamWorks Infotech" fluid />
            </a>
          </Col>
          <Col xl={6} sm={6} col={6}>
            <div className="copyright text-white small">
              <label className="text-white small pb-0 pt-0" style={{ fontSize: '20px' }}>
                Total Visits: <span className="visitcount">295806</span>
              </label>
            </div>
          </Col>
        </Row>
        </Container>
        </footer>
  )}

  export default MyFooter;
