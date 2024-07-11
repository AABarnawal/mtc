import React, { useEffect, useState } from 'react';
import DashBoardData from './DashBoardData';
import { Link } from 'react-router-dom';
import axios from 'axios';
import linkdata from '../link';
function DashBoard() {
  const samnumber = JSON.parse(sessionStorage.getItem('value')).mtcCode; // Initial value
  console.log("sam number:", samnumber);
  const [data, setData] = useState(null); // State to hold fetched data

  useEffect(() => {
    const fetchData = async () => {
      console.log("trying......");
      try {
        const encodedSam = samnumber.replace(/\//g, "%2F");
        const response = await axios.get(`${linkdata}api/MTCCenter/${encodedSam}`);
        setData(response.data);
        sessionStorage.setItem('sam', response.data[0].samNo); // Store data in sessionStorage
        console.log("Fetched data:", response.data[0].samNo); // Log the fetched data
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();

    // Cleanup function (optional, but recommended for potential side effects)
    return () => {
      // Any cleanup logic here, e.g., canceling subscriptions, timeouts
    };
  }, [samnumber]); // Add `samnumber` as a dependency

  return (
    <div className="p-4 mt-5" style={{minHeight:"75vh", }} >
    <div className="p-4 col-xl-9" style={{display:"flex", flexWrap: "wrap", justifyContent:"space-between",width:"100%"}}>
     {DashBoardData.map(ncard)} 
    </div> 
  </div>
  )
}



const ncard = (val)=>{
  return(  <CardComp
   key={val.id}
   title={val.title}
   path={val.path}
   imageUrl={val.imageUrl}
   />
   )
}



function CardComp({ title,path , imageUrl}) {

  return (
    <Link style={{height: '200px',width:"400px" }} to={path} className="card card-hover h-100 border-0">
      <img  src={imageUrl} alt={title} />
    </Link>
  );
}

export default DashBoard