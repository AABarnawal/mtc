import React from 'react';
import './Styles/MissionMsg.css'; // Import your CSS file

const MissionMsg = () => {
  const isMobile = window.screen.width > 600
  return (
      <div className="row m-0" style={{backgroundColor:"white", }} >
        <div className="col-10 col-md-8 white-section">
          <h2>Message from Mission Director</h2>
          <div className="contents">
            <p>
              Government of Jharkhand is committed to improve the nutrition status of all children and put extra focus on treatment of most vulnerable children with Severe Acute Malnutrition (SAM) through a wide network of 96 Malnutrition Treatment Centers (MTC). I am happy to share the revised online Malnutrition Treatment Center Management Information System (MTC-MIS) which is an extremely helpful management tool that will go a long way towards monitoring and alleviating the malnutrition in children. The latest revised version not only allows Real Time Data entry and management but also simultaneously enables MTC Staff to register children, update and keep a track of their daily weight as well as intake of micronutrients and antibiotics with discharge summary thereby providing a holistic and comprehensive track of all important indicators and quality of care and coverage. The information thus generated from 96 functional MTCs to manage children with Severe Acute Malnutrition (SAM) with medical complications will not only be helpful in the programmatic management but also in informing and reforming policy frameworks on nutrition across the state. I am confident and certain that the present dashboard of MTC in this website would enhance the technical and management expertise for treatment of Children with Severe Acute Malnutrition. The envisioned purpose of the revised MTC MIS online website is to become a handy tool to monitor and improve care and treatment to the children and not necessarily remain just a reporting dashboard. I thank UNICEF, State Center of Excellence – SAM at RIMS in supporting this important initiative.
            </p>
            { !isMobile && <img src="https://mtc.jharkhand.gov.in/Images/202272455451108mdbhuvnesh.jpg" alt="" srcset="" />  }
            <br/><br/>
            <h4>Dr. Bhuvnesh Pratap Singh, IAS</h4>
            <h4>Mission Director</h4>
            <h4>National Health Mission, Jharkhand</h4>
          </div>
        </div>
        { isMobile && <div className="col-10 col-md-4 green-section">
            <img src="https://mtc.jharkhand.gov.in/Images/202272455451108mdbhuvnesh.jpg" alt="" srcset="" />
        </div>}
    </div>
  );
};

export default MissionMsg;
