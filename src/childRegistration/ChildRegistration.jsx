
import React, { useState, useEffect }  from 'react'
import FormPageComp from '../Components/FormPageComp'
import axios from 'axios';
import linkdata from '../link';
const tableHead = [
  { Header: 'Record No', accessor: 'rid' },
  { Header: 'SAM Number', accessor: 'samNo' },
  { Header: 'Child Name', accessor: 'childName' },
  { Header: 'Mother Name', accessor: 'motherName' },
  { Header: 'Father/Caretaker Name', accessor: 'fatherName' },
  { Header: 'Admission Weight', accessor: 'admissionWeight' },
  { Header: 'Admission Height', accessor: 'admissionHeight' } // Assuming 'Edit' is a link or data for the "Details" column
];

function ChildRegistration() {
  const samnumber = JSON.parse(sessionStorage.getItem('value')).mtcCode; // Initial value
  console.log("sam number:", samnumber);

  const [dataResult, setDataResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Added isLoading state
  const [error, setError] = useState(null); // Added error state

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set isLoading to true before fetching
      setError(null); // Clear any previous error

      try {
        const encodedSam = samnumber.replace(/\//g, "%2F");
        const response = await axios.get(`${linkdata}api/Sam/${encodedSam}`);
        console.log("data", response.data);
        setDataResult(response.data);
        sessionStorage.setItem('sam', response.data[0].samNo); // Store data in sessionStorage
        console.log("Fetched data:", dataResult); // Log the fetched data
      } catch (error) {
        console.error('Error fetching data:', error.message);
        setError(error.message); // Set error state
      } finally {
        setIsLoading(false); // Set isLoading to false after completion (success or error)
      }
    };

    fetchData();

    // Cleanup function (optional, but recommended for potential side effects)
    return () => {
      // Any cleanup logic here, e.g., canceling subscriptions, timeouts
    };
  }, [samnumber]); // Add `samnumber` as a dependency

  return (
    <div className='p-5 mt-5'>
      {isLoading ? ( // Display loading indicator while fetching
        <p>Loading...</p>
      ) : error ? ( // Display error message if encountered
        <p>Error: {error}</p>
      ) : (
        <FormPageComp
          name="Child Registration"
          add='http://localhost:3000/DashBoard/AddChild'
          Description="list of registered child"
          initialTableData={dataResult || []}
          tableHead={tableHead}
          onRowClick="/DashBoard/AddChild"
        />
      )}
    </div>
  );
}

export default ChildRegistration;

// function ChildRegistration() {
//   const samnumber = JSON.parse(sessionStorage.getItem('value')).mtcCode; // Initial value
//   console.log("sam number:", samnumber);
//   const [dataResult, setDataResult] = useState(null); // State to hold fetched data

//   useEffect(() => {
//     const fetchData = async () => {
//       console.log("trying......");
//       try {
//         const encodedSam = samnumber.replace(/\//g, "%2F");
//         const response = await axios.get(`http://192.168.0.164/api/Sam/${encodedSam}`);
//         console.log("data", response.data);
//         setDataResult(response.data);
//         // sessionStorage.setItem('sam', response.data[0].samNo); // Store data in sessionStorage
//         console.log("Fetched data:", dataResult); // Log the fetched data
//       } catch (error) {
//         console.error('Error fetching data:', error.message);
//       }
//     };

//     fetchData();

//     // Cleanup function (optional, but recommended for potential side effects)
//     return () => {
//       // Any cleanup logic here, e.g., canceling subscriptions, timeouts
//     };
//   }, [samnumber]); // Add `samnumber` as a dependency
//   return (
//     <div className='p-5 mt-5'>
//       <FormPageComp 
//       name="Child Registration" 
//       add='http://localhost:3000/DashBoard/AddChild' 
//       Description="list of registered child" 
//       initialTableData={dataResult} 
//       tableHead={tableHead}
//       onRowClick="/DashBoard/AddChild" />
//     </div>
//   )
// }

// export default ChildRegistration