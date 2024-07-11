import React from 'react';
import './Styles/TextImage.css'; // Import your CSS file

const TextImage = ({ textContent, imageSrc }) => {
  const isMobile = window.screen.width > 600
  return (
    <div className="text-image-container " >
      <div className="text-column col-xs-12 ">
        {textContent}
      </div>
      { isMobile && <div className="image-container col-xs-0 col-sm-0" >
        <img src={imageSrc} alt="Background Image" className="image" />
      </div> }
    </div>
  );
};


function MyComponent() {
  const titleStyle = {
    color: '#f1c103',
    fontSize: '32px',
    fontWeight: 'bold',
    textAlign: 'left',
  };

  const subheadingStyle = {
    color: '#f1c103',
  };
  const textContent = (
  
      <div style={{backgroundColor:"#0b918c", padding: 0}}>
        <h2 style={titleStyle}>Malnutrition Treatment Center</h2>
        <div className="text-left" id="p_about">
          <h5 style={subheadingStyle}>Background :</h5>
          <p>
            Malnutrition is a serious public health problem in Jharkhand. As per MoHFW CNNS 2016-17, 6.7% children under the age of 5 years are Severe Acute Malnourished (SAM) in Jharkhand. SAM is an important preventable and treatable cause of morbidity and
            mortality in children below five years. To address huge case load of children with SAM, National Health Mission (NHM), Department of Health and Family Welfare, Government of Jharkhand has established a network of Malnutrition Treatment Centre
            (MTCs) , a facility based unit at Community Health Centres (CHCs) and at District Hospitals to manage children with SAM present. Government of India has sanctioned 103 Malnutrition Treatment Centre (MTCs) for the State of Jharkhand out of which
            96 MTCs are currently functional.
          </p>
          <h5 style={subheadingStyle}>What is Malnutrition Treatment Centre? </h5>
          <p>
            It is a unit in a health facility where children with Severe Acute Malnutrition (SAM) are admitted and managed. Children are admitted as per the defined admission criteria and provided with medical and nutritional therapeutic care. Once discharged
            from the MTC, the child is followed up every 15 days for four follow-ups.
          </p>
          <h5 style={subheadingStyle}>Treatment at Malnutrition Treatment Centre:</h5>
          <p>
            Once the child is diagnosed through anthropometry examination as SAM, the child gets admitted to MTC and treated based medical complication and result of appetite test. The child undergoes medical check-up and feeding treatment according to MoHFW
            protocol. The child is also treated for his ailment and medical complication as per standard Government of India guidelines. A package of micronutrient is also administered for the admitted child. Daily growth of child is tracked and recorded.
            During the stay mother is given present Rs.130.00 as wage compensation per day.
          </p>
          <h5 style={subheadingStyle}>Discharge from MTC: </h5>
          <p>
            Once the child achieved 15% weight gain on the weight of admission or of the weight of after the disappearance of bi-pedal edema, there has been satisfactory weight gain for 3 consecutive days (&gt;5 gm/kg/day) and no signs of illness, the child is
            declared cured and in that condition s/he is discharged. On an average a SAM child stays for 15-20 days in the center, but it is entirely depending upon its weight gain. If the child if not gaining weight because of critical medical problem is
            referred for expert advice.
          </p>
          <h5 style={subheadingStyle}>Follow-up:</h5>
          <p>
            During the time of discharge the parents are asked to come for four follow-ups at the interval of 15 days. The incentive is also there for ASHA (Sahiya) for referral of children to MTC and ensuring four follow-ups of the child discharged.
          </p>
        </div>
      </div>
  );

  const imageSrc = 'https://mtc.jharkhand.gov.in/Images/2nd-section-bg.jpg';

  return (
    <div>
      <TextImage textContent={textContent} imageSrc={imageSrc} />
    </div>
  );
}


export default MyComponent;