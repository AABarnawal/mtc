import React, { useEffect } from 'react';
import { Navbar, Nav, Container, NavDropdown, Image, Button } from 'react-bootstrap';
import Login from '../Popups/Login';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {useState} from 'react';
import ReceiveSam from '../Calculation/ReceiveSam';

const Navbarcom = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handlePopupOpen = () => {
    setIsOpen(false); // Close dropdown when popup opens
  };
  const [sessionData, setSessionData] = useState({
  mtcId : '',
  mtcCode :'',
  mtcName :'',
  bed :'',
  districtId :'',
  districtName : '',
  })
  useEffect(()=>{
    const data = JSON.parse(sessionStorage.getItem('value'));
    if(data){
      console.log(data);
    setSessionData({
      mtcId : data.mtcId,
      mtcCode : data.mtcCode,
      mtcName : data.mtcName,
      bed : data.bed,
      districtId : data.districtId,
      districtName : data.districtName,
    });
 
    }
  }, [])
  return (
    <header  id="header" className="fixed-top bg-light">
      {/* Large Screens */}
      <div className="d-none d-md-none d-lg-block ">
        <Container fluid className="d-flex  align-items-center mb-1 mt-1 pt-1 pb-1 justify-content-between">
          <Nav.Link href="/">
            <Image src="https://mtc.jharkhand.gov.in/Images/logo-jharkhand-govt.png" alt="Jharkhand Govt Logo" className="img-fluid logo1" />
          </Nav.Link>
          <div className="ml-auto text-center">
            <Image src="https://mtc.jharkhand.gov.in/Images/logo-mtc.png" alt="MTC Logo" className="ml-xl-5 img-fluid logo1" />
          </div>
          <Nav.Link href="#" target="_blank">
            <Image src="https://mtc.jharkhand.gov.in/Images/logo-nhm.png" alt="NHM Logo" className="img-fluid d-none d-sm-block logo1 mr-4" />
          </Nav.Link>
        </Container>
      </div>

      {/* Medium and Small Screens */}
      <div className="d-none d-sm-block d-md-block d-lg-none">
        <Container fluid className="d-flex align-items-center mb-1 mt-1 pt-1 pb-1">
          <Nav.Link href="/">
            <Image src="https://mtc.jharkhand.gov.in/Images/logo-mtc.png" alt="Tab Logo" className="img-fluid" />
          </Nav.Link>
        </Container>
      </div>

      {/* Mobile Screens */}
      <div className="d-block d-sm-none d-md-none d-lg-none">
        <Container fluid className="d-flex align-items-center mb-1 mt-1 pt-1 pb-1">
          <Nav.Link href="/">
            <Image src="https://mtc.jharkhand.gov.in/Images/mobile-logo-400.jpg" alt="Mobile Logo" className="img-fluid" />
          </Nav.Link>
        </Container>
      </div>
      {props.Loginstatus ? (

      <Navbar style={{background: "linear-gradient(180deg, rgba(11,145,140,1) 64%, rgba(5,117,103,1) 100%)", color:"white",borderBottom: '5px solid #E4A11B'}} expand="lg">
        <Container fluid className="d-flex justify-content-between">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto text-light">
              <Nav.Link className='text-light' href="/">Home</Nav.Link>
              <NavDropdown className='text-light' title="About" id="basic-nav-dropdown">
                <NavDropdown.Item href="/#about">About Us</NavDropdown.Item>
                <NavDropdown.Item href="/#message">Message from Mission Director</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className='text-light' href="/Resources/ShowResource">Resources</Nav.Link>
              <Nav.Link className='text-light' href="/Resources/Gallery">Gallery</Nav.Link>
              <Nav.Link className='text-light' href="/Resources/Contact">Contact Us</Nav.Link>
            </Nav>
            
            <NavDropdown
            title="Login" 
            id="basic-nav-dropdown">
                <NavDropdown.Item href="/Home/Index#about">Administrator</NavDropdown.Item>
                <NavDropdown.Item href="/Home/Index#message">State User</NavDropdown.Item>
                <NavDropdown.Item href="/Home/Index#message">District User</NavDropdown.Item>
                <NavDropdown.Item href="/login"> MTC User list</NavDropdown.Item>
                <NavDropdown.Item>
                  <Popup trigger={<h6 onClick={handlePopupOpen} className="button"> MTC User </h6>} modal>    
                    <Login name="MTC User" />  
                  </Popup>
                </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      ) : (
        <div>
          <Navbar style={{background: "linear-gradient(180deg, rgba(11,145,140,1) 64%, rgba(5,117,103,1) 100%)", color:"white",borderBottom: '5px solid #E4A11B'}} expand="lg">
        <Container fluid className="d-flex justify-content-between">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto text-light">
              <Nav.Link className='text-light' href="/DashBoard">DashBoard</Nav.Link>

              <Nav.Link className='text-light' href="/DashBoard/ChildRegistration">Child Registration</Nav.Link>
              {/* SAMAR */}
              <Nav.Link className='text-light' href="/DashBoard/SamarRegistration">SAMAR Registration</Nav.Link>

              <Nav.Link className='text-light' href="/DashBoard/DailyWeight">Daily Weight</Nav.Link>

              <Nav.Link className='text-light' href="/DashBoard/MandA">M & A</Nav.Link>

              <Nav.Link className='text-light' href="/DashBoard/Maternal">Maternal</Nav.Link>

              <Nav.Link className='text-light' href="/DashBoard/Discharge">Discharge</Nav.Link>

              <NavDropdown className='text-light' title="Follow Up" id="basic-nav-dropdown">
                <NavDropdown.Item href="/DashBoard/Followup">Follow Up</NavDropdown.Item>
                <NavDropdown.Item href="/#message">SMS Follow Up Due Dates</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link className='text-light' href="/Resources/ShowResource">Generate Follow Up</Nav.Link>
              <Nav.Link className='text-light' href="/Resources/Gallery">Equipment Section</Nav.Link>
              <Nav.Link className='text-light' href="/Resources/Contact">Staff Details</Nav.Link>
              <Nav.Link className='text-light' href="/Resources/Contact">Bad Occupancy</Nav.Link>
            </Nav>
            <NavDropdown
            title="Reports" 
            id="basic-nav-dropdown">
                <NavDropdown.Item href="/Home/Index#about">Child Case Sheet</NavDropdown.Item>
                <NavDropdown.Item href="/Home/Index#message">Discharge Card</NavDropdown.Item>
                <NavDropdown.Item href="/Home/Index#message">FollowUp Status Report</NavDropdown.Item>

                <NavDropdown.Item href="/Home/Index#message">Maternal Nutrition Report</NavDropdown.Item>

                <NavDropdown.Item href="/Home/Index#message">MTC Monthly Report</NavDropdown.Item>
                <NavDropdown.Item href="/Home/Index#message">
                <NavDropdown className='text-light' title="Sahiya Referral/ Followed-up Report" id="basic-nav-dropdown">
                <NavDropdown.Item href="/#about">Sahiya Referral Report</NavDropdown.Item>
                <NavDropdown.Item href="/#message">Follow Up Report</NavDropdown.Item>
              </NavDropdown></NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
        
      </Navbar>
        <div className='d-flex justify-content-between p-2' style={{borderBottom: '3px solid  #F"C300 '}}>
         <div className='d-flex justify-content-around' style={{width: '50%'}} >
         <h5 className="font-weight-bold">MTC Name : {sessionData.mtcName}</h5>
         <h5 className="font-weight-bold">MTC ID : {sessionData.mtcId}</h5>
         <h5 className="font-weight-bold">District name : {sessionData.districtName}</h5>
         </div>
         <Button href='/' 
          onClick={()=>{
            sessionStorage.removeItem('value');
            sessionStorage.removeItem('sam');
          }} >Logout</Button>
        </div>
        </div>
      )}
    </header>
  );
};

export default Navbarcom;
