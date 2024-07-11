import React, { useState, useRef, useEffect } from 'react';
import { saveAs } from 'file-saver'; 
import { ResponsiveContainer,CartesianGrid, Line, LineChart, XAxis, YAxis, Tooltip  } from 'recharts';
const data = [{Day: 'Day 1', weight: 5.50},
  {Day: 'Day 2', weight: 5.58},
  {Day: 'Day 3', weight: 5.78},
  {Day: 'Day 4', weight: 6.08},
  {Day: 'Day 5', weight: 6.18},
  {Day: 'Day 6', weight: 6.22},
  {Day: 'Day 7', weight: 6.30},
  {Day: 'Day 8', weight: 6.48},
  {Day: 'Day 9', weight: 6.68},
  {Day: 'Day 10',},
  {Day: 'Day 11',},
  {Day: 'Day 12',},
];

const ChartComp = ()=>{
  const chartRef = useRef(null);

  const handleDownload = () => {
    const chartContainer = chartRef.current;
    if (!chartContainer) return;

    const chartSVG = chartContainer.querySelector('svg');
    if (!chartSVG) return;

    let chartData;
      const serializer = new XMLSerializer();
      chartData = serializer.serializeToString(chartSVG);
    const blob = new Blob([chartData], { type:  'image/svg+xml;charset=utf-8'});
    const filename = `chart.svg`;
    saveAs(blob, filename);
  };
  return(
      <table border={1} className='p-4 col-xl-12'>
        <tr>
        <td style={{writingMode: "sideways-lr", border:"2px solid black"}} >Target weight:- 15% weight gain from weight on admission
          (free of oedema*)</td>
          <td style={{ border:"2px solid black"}}>
            <div style={{height: '50%', }}>
              Minimum weight (kg)<br/>
              5.58
            </div>
            <div style={{height: '50%', }}>
              Target weight(kg)<br/>
              6.417
            </div>
          </td>
          <td style={{writingMode: "sideways-lr",border:"2px solid black"}}> Weight chart (Weight in kilograms) </td>
          <td style={{ border:"2px solid black"}}>
          <ResponsiveContainer width="100%" height="600px" className="p-4" aspect={2} ref={chartRef}>
            <LineChart  data={data} margin={{ top: 5, right: 0, bottom: 5, left: 0 }}>
              <Line type="monotone" dataKey="weight" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="Day" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>

          <button onClick={handleDownload}>Download</button>
          </td>
        </tr>
      </table>
  )
};


export default ChartComp;
