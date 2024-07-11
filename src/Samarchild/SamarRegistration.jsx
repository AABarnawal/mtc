import React, { useState, useEffect } from 'react';
import XMLParser from 'react-xml-parser';

function SamarRegistration() {
  // const [isLoading, setIsLoading] = useState(false);
  // const [response, setResponse] = useState(null);
  // const [error, setError] = useState(null);
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);
  //     try {
  //       const url = 'http://testservice.saamar.in/Service.asmx/MTCRefferedChildList';
  //       const details = {
  //         user: 'Ar15025',
  //         pass: 'Ar15025',
  //       };

  //       const formBody = Object.entries(details)
  //         .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
  //         .join('&');

  //       const response = await fetch(url, {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  //         },
  //         body: formBody,
  //       });

  //       if (!response.ok) {
  //         throw new Error(`API request failed with status ${response.status}`);
  //       }

  //       const textData = await response.text();
  //       const xml = new XMLParser().parseFromString(textData);
  //       setResponse(xml); // Store the parsed XML response

  //       const jsonData = xml.children.find(child => child.name === 'someElementName'); // Adjust element name as needed
  //       if (jsonData) {
  //         setData(JSON.parse(jsonData.value)); // Store the parsed JSON data
  //       } else {
  //         setError('Expected JSON data not found in the XML response.');
  //       }
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div>
      <h1>Hello World</h1>
      {/* {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {data && (
        <pre>
          {JSON.stringify(data, null, 2)} {/* Display the parsed JSON data in a formatted way 
        </pre>
      )} */}
    </div>
  );
}

export default SamarRegistration;
