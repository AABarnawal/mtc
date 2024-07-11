import axios from 'axios';
import { useEffect, useState } from 'react';

function ReceiveSam() {
    console.log("caught error")
  const samnumber = "JH/WSB/CKP/";
  const [sam, setSam] = useState(samnumber);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const encodedSam = samnumber.replace(/\//g, "%2F"); // Encode slashes
        const response = await axios.get(`http://192.168.0.164/api/MTCCenter/${encodedSam}`);
        sessionStorage.setItem('sam', response.data);
      } catch (error) {
        console.error('Error fetching data:', error.message); // Use console.error for potential user-facing issues
      }
    };
  
    fetchData();
  
    // Optional cleanup function (if needed for subscriptions, timeouts, etc.)
    return () => {
      // Your cleanup logic here
    };
  }, [samnumber]); // Re-run only when samnumber changes
  return;

  // Add a return statement with JSX content
}

export default ReceiveSam;
