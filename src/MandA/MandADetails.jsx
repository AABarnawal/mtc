import React, {useState} from 'react'
import "../pagestyle.css"
import { Button } from 'react-bootstrap';
import MedDos from './MedDos';


const styles = {
    table: {
      borderCollapse: 'collapse',
      border: '1px solid #ddd', // Add border
      margin: '20px auto', // Add margin
      padding: '10px', // Add padding
      width: '100%'
    },
    th: {
      border: '1px solid #ddd', // Add borders to header cells
      padding: '5px 10px', // Add padding to header cells
    },
    td: {
      border: '1px solid #ddd', // Add borders to data cells
      padding: '5px 10px', // Add padding to data cells
      fontWeight: 'bold',
    },
    select: {
      width:'100%',
    }
  };

function MandADetails(props) {
  const [checkedMedicines, setCheckedMedicines] = useState({}); // Use object for medicine-specific checkboxes

  const handleCheckboxChange = (id) => {
    const newCheckedMedicines = { ...checkedMedicines }; // Copy existing state
    if (newCheckedMedicines[id]) { // Check if medicine with 'id' exists
      delete newCheckedMedicines[id]; // Deselect if already checked
    } else {
      newCheckedMedicines[id] = true; // Select if not checked
    }
    setCheckedMedicines(newCheckedMedicines);
  };

  return (
    <div className='boxCon m-4' style={{border: "2px solod black"}}>
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
        <table style={styles.table}>
            <thead>
                <th colspan="30">
                    TO BE FILLED UP BY THE DOCTOR / PARAMEDICAL STAFF AS APPLICABLE 
                </th>
            </thead>
            <thead>
                <tr>
                <th style={styles.th}>Medicine (Dosage)</th>
                {Array.from({ length: 30 }, (_, i) => (
                    <th key={i} style={styles.th}>
                    Day {i}
                    </th>
                ))}
                </tr>
            </thead>
            <tbody>
                {MedDos.map((medicine) => (
                <tr key={medicine.id}>
                    <td style={styles.td}>{medicine.name}</td>
                    {Array.from({ length: medicine.Dosage }, (_, i) => (
                    <td key={i} style={styles.td}>
                        <input
                        type="checkbox"
                        onChange={() => handleCheckboxChange(medicine.id)}
                        />
                    </td>
                    ))}    
                </tr>
                ))}
            </tbody>
        </table>
        <table style={styles.table}>
            <thead>
                <th colspan="30">
                    TO BE FILLED UP BY THE DOCTOR / PARAMEDICAL STAFF AS APPLICABLE 
                </th>
            </thead>
            <tbody>
                <tr>
                    <td  style={{writingMode: "sideways-lr",fontWeight: 'bold', border: '1px solid #ddd'}} >Laboratory Tests Section</td>
                    <td style={styles.th}>
                      <table style={styles.table}>
                        <thead>
                          <th style={styles.th}>Test Name</th>
                          <th style={styles.th}>Test Conducted Status</th>
                          <th style={styles.th}>Value/Result</th>
                        </thead>
                        <tbody>
                          <TableContent name="TB Test" />
                          <TableContent name="Urine Test " />
                          <TableContent name="TC/DC of WBC " />
                          <TableContent name="Blood Sugar " />
                          <TableContent name="Malaria Test " />
                          <TableContent name="Chest X-r" />
                          <TableContent name="Haemoglobin (gm/dl) " />
                          <tr>
                            <td style={styles.td}>Other Tests (For repeated tests) </td>
                            <td style={styles.td} colSpan={2} ><input style={{width:"100%"}} type="text" /></td>
                          </tr>
                        </tbody>
                      </table>
                    </td>

                </tr>
            </tbody>
        </table>
        </div>
        
        <div style={{width:'100%'}} >
        <Button style={{left:0}}>Save</Button>
        <Button style={{left:0}}>Cancel</Button>
        </div>
    </div>
  )
}


function TableContent(props){
  const [selectedOption, setSelectedOption] = useState('no'); // Initial state

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return(
    <tr>
      <td style={styles.td}>{props.name} </td>
      <td>
      <select value={selectedOption} onChange={handleOptionChange} style={styles.select} >
      <option value="no">No</option>
      <option value="yes">Yes</option>
    </select>
      </td>
      <td style={styles.td}><input style={{width:"100%"}} type="text" disabled={selectedOption === 'no'} /></td>
    </tr>
  )
}

export default MandADetails