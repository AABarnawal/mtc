import React from 'react'
import { useLocation } from 'react-router-dom';
function Samarregisterform() {
  const location = useLocation();

  const itemData = location.state; // Access the passed item data

  if (!itemData) {
    return <p>No item data found.</p>; // Handle cases where no data is passed
  }

  const { Record, SAM, Child, Parent, Date, weight, height, ...otherData } = itemData; // Destructure data

  return (
    <div>
      <h2>Details</h2>
      <p>Record No: {Record}</p>
      <p>SAM Number: {SAM}</p>
      <p>Child Name: {Child}</p>
      <p>Parent Name: {Parent}</p>
      <p>Date Of Birth: {Date}</p>
      <p>Admission Weight: {weight}</p>
      <p>Admission Height: {height}</p>
      {/* Display other data if present using ...otherData */}
    </div>
  )
}

export default Samarregisterform