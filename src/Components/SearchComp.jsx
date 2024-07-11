import React, { useState } from 'react';
import { Row, Col, Form, FormControl, Button } from 'react-bootstrap'; // Assuming Bootstrap for styling

function SearchComp({ tableData, onSearch }) {
  const [formData, setFormData] = useState({
    fromDate: '',
    toDate: '',
    recordNo: '',
    samNo: '',
    childName: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    
  };
  const isEmptySearch = () => {
    return !formData.recordNo && !formData.samNo && !formData.childName;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (isEmptySearch()) {
      onSearch(formData); // Send empty search criteria to parent
    }else{
      const searchCriteria = { ...formData }; // Clone formData to avoid mutation
    onSearch(searchCriteria); // Pass the search criteria to the parent component
    }
  };

  return (
    <Form className='SearchBox' 
    onChange={handleSubmit}
    >
      <Row>
        <Col xs={12} md={6}>
          <Form.Group controlId="fromDate">
            <Form.Label>From Date</Form.Label>
            <FormControl
              type="date"
              name="fromDate"
              value={formData.fromDate}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group controlId="toDate">
            <Form.Label>To Date</Form.Label>
            <FormControl
              type="date"
              name="toDate"
              value={formData.toDate}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <Form.Group controlId="recordNo">
            <Form.Label>Record No</Form.Label>
            <FormControl
              type="text"
              name="recordNo"
              value={formData.recordNo}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group controlId="samNo">
            <Form.Label>SAM No</Form.Label>
            <FormControl
              type="text"
              name="samNo"
              value={formData.samNo}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Form.Group controlId="childName">
            <Form.Label>Child Name</Form.Label>
            <FormControl
              type="text"
              name="childName"
              value={formData.childName}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
}

export default SearchComp;
