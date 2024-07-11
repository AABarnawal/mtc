import React from 'react';
import '../Styles/tools.css'
import { Col, Row, Card, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

const FeedPlannerCard = ({ title, imageSrc, handleClick }) => {
  return (
    <Col xs={11} md={6} lg={2} className="mt-5 m-4 p-1 cardscom" >
      <Card className="h-100 shadow-lg border-0 card-hover" style={{ borderRadius: '1rem' }} onClick={handleClick}>
        <Image src={imageSrc} className="card-img-top" alt="" style={{ borderRadius: '1rem 1rem 0 0' }} />
        <Card.Body className="text-content">
          <h4 className="float-left" style={{ fontSize: '17px' }}>
            {title}
          </h4>
          <div className="float-right">
            <a href="#" className="font-weight-bold">
              <FontAwesomeIcon icon={faChevronCircleRight} style={{ fontSize: '20px' }} />
            </a>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

const toolsPage = () => {
    const OpenFeedPlannerCalculator =() =>{}
    const OpenZScoreCalculator =() =>{}
    const OpenMicroPlannerCalculator =() =>{}
    const OpenWeightGainCalculator =() =>{}
  return (
    <div className="container-fluid pl-5 pr-5" style={{backgroundImage: "url('https://mtc.jharkhand.gov.in/Images/3rd-section-bg.jpg')"}} >
      <Row className="d-flex justify-content-around ">
        <FeedPlannerCard
          title="Feed Planner"
          imageSrc="https://mtc.jharkhand.gov.in/Images/img-feedplanner.jpg"
          handleClick={() => OpenFeedPlannerCalculator()}
        />
        <FeedPlannerCard
          title="Z-Score (SD) Calculator"
          imageSrc="https://mtc.jharkhand.gov.in/Images/img-feedplanner.jpg"
          handleClick={() => OpenZScoreCalculator()}
        />
        <FeedPlannerCard
          title="Micronutrient Planner"
          imageSrc="https://mtc.jharkhand.gov.in/Images/img-feedplanner.jpg"
          handleClick={() => OpenMicroPlannerCalculator()}
        />
        <FeedPlannerCard
          title="Weight Gain Rate Calculator"
          imageSrc="https://mtc.jharkhand.gov.in/Images/img-feedplanner.jpg"
          handleClick={() => OpenWeightGainCalculator()}
        />
      </Row>
       
    </div>
  );
};

export default toolsPage ;
