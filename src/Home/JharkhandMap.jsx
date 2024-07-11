import * as d3 from 'd3';
import React, { useEffect } from 'react';


// const jharkhandData = { // Replace with actual Jharkhand map data
//   type: "Topology",
//   objects: {
//     jharkhand: {
//       type: "GeometryCollection",
//       geometries: [ /* District geometries */ ]
//     }
//   }
// };

// const unemploymentData = [
//   { district: "Ranchi", rate: Math.random() * 10 }, // Fake data
//   { district: "East Singhbhum", rate: Math.random() * 10 },
//   { district: "South Chotanagpur", rate: Math.random() * 10 },
//   // ... data for other districts
// ];
const JharkhandMap = () => {
  const barData = [10,20,30,40,50];
  useEffect(()=>{
    const firstDatum = d3.select('svg').select('rect').datum(barData);
    console.log(firstDatum);
  })
  return(
    <svg>
      <rect/>
      <rect/>
      <rect/>
      <rect/>
      <rect/>
    </svg>
  )
  
  // return <svg style={{backgroundColor:"white"}} width="1000" height="1000" >
  //   <path
  //     d="M250,250 L250,350
  //     M750,250 L750,350
  //     M150, 750 C200,1000 800,1000 850,750 "
  //     stroke='black'
  //     stroke-width="2"
  //     fill='none'

  //   />
  //   {/* <path
  //     d=""
  //     stroke='black'
  //     stroke-width="2"
  //   />
  //   <path
  //     d="M750,750 L750,350"
  //     stroke='black'
  //     stroke-width="2"
  //   /> */}
  // </svg>;
};

export default JharkhandMap;
