import React from 'react'

function CalculateBMI({height, weight, setBMI}) {
  const meter = height/100;
  const msquare = meter*meter;
  const bmi = weight/msquare;
  setBMI(parseFloat(bmi).toFixed(3));
}

export default CalculateBMI