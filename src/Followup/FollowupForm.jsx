import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import FollowupFormTable from './FollowupFormTable';
function FollowupForm() {
  //1st case
  // if folloup is saved then another follow up will be created 
  // max 4 followup
  // 
  return (
    <div
        className='boxCon'
        style={{
        border: "2px solod black",
        margin:"80px 25px 0px 25px"
    }}>
    <div className='titleBox p-4 d-flex'>
        {/* name + Add button */}
        <h1>Child Discharge</h1>
    </div>
    <div className="short-div row p-2">
              {/* SAM NUMBER */}
              <div className="col-xl-3 mb-2">
                <label>SAM Number</label>
                <input
                  className="form-control form-control-sm"
                  disabled
                  id="txt_SamNumber"
                  name="SAM_NO"
                  type="text"
                  // value={formData.SAM_NO}
                  // onChange={handleInputChange}
                />
                <span className="highlight"></span>
              </div>
              {/* CHILD NAME */}
              <div className="col-xl-3 mb-2">
                <label>Child Name</label>
                <input
                  className="form-control form-control-sm"
                  disabled
                  id="txt_CHILD_NAME"
                  name="CHILD_NAME"
                  type="text"
                  // value={formData.CHILD_NAME}
                  // onChange={handleInputChange}
                />
                <span className="highlight"></span>
              </div>
    </div>
    <div className='p-2'>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Follow up 1</Accordion.Header>
        <Accordion.Body>
          <FollowupFormTable />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>Follow up 2</Accordion.Header>
        <Accordion.Body>
          <FollowupFormTable />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Follow up 3</Accordion.Header>
        <Accordion.Body>
          <FollowupFormTable />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>Follow up 4</Accordion.Header>
        <Accordion.Body>
          <FollowupFormTable />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
    </div>
  )
}

export default FollowupForm