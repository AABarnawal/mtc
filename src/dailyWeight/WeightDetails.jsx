import React from 'react'
import "../pagestyle.css"
import ChartComp from './ChartComp';
import { Button } from 'react-bootstrap';


function Dayinp(props){
  return(
    <div style={{margin: "5px 12px"}} >
      <h6>{props.name}</h6>
      <input style={{width: "80px"}} type="text" name="" disabled={props.dis} id="" />
    </div>
  )
}

const DayinpData = Array.from({ length: 60 }, (_, i) => ({
  name: `Day ${i}`,
  dis: i<=8 ? false : true,
}));

function WeightDetails(props) {
  return (
    <div className='boxCon ' style={{border: "2px solod black", margin:"80px 25px 0px 25px"}}>
        <div className='titleBox p-4 d-flex'>
            {/* name + Add button */}
            <h1>{props.name}</h1>
        </div>
        <div className='p-4'>
          <div className='d-flex' style={{justifyContent: "space-around"}} >
            <div>
              <h6>SAM Number</h6>
              <input placeholder='xxxxxxxxxxx' disabled={true} type="text" />
            </div>
            <div>
              <h6>Child Name</h6>
              <input placeholder='xxxxxxxxxxx' disabled={true} type="text" />
            </div>
          </div>
          <div style={{display: "flex", flexWrap:"wrap", border: "0.5px solid black", padding : "10px", borderRadius: "5px", margin:"15px"}}>
            {/* box input 0- 59 days */}
            {DayinpData.map((item) =>(
              <Dayinp
                name={item.name}
                dis={item.dis}
              />
            ))}
          </div>
          <h6>** Weight entered in kilograms (kg) </h6>
        </div>
        <div>
            <ChartComp />
        </div>
        <div style={{width:'90%'}} className='p-4' >
          <Button style={{left:0, margin: '2px'}}>Save</Button>
          <Button style={{left:0}}>Cancel</Button>
        </div>
    </div>
  )
}

export default WeightDetails