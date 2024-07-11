import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

function FollowupFormTable() {
  return (
    <div>
        <table>
            <tr>
                <th>Record no</th>
                <th>Follow-up Visit</th>
                <th>Follow-up Due Date</th>
                <th>Follow-up Actual Date</th>
                <th>Follow-up Weight (kg)</th>
                <th>Follow-up Length/ Height (cm)</th>
                <th>Follow-up MUAC (cm)</th>
                <th>Follow-up Z-Score (SD)</th>
                <th>Designation</th>
                <th>Followed-up By Name</th>
                <th>Followed-up By Mobile</th>
            </tr>
            <tr>
                <td><InputBox /></td>
                <td><InputBox /></td>
                <td><InputBox /></td>
                <td><InputBox /></td>
                <td><InputBox /></td>
                <td><InputBox /></td>
                <td><InputBox /></td>
                <td><InputBox /></td>
                <td><InputBox /></td>
                <td><InputBox /></td>
                <td><InputBox /></td>
              
            </tr>
        </table>
        <Button>save</Button>
    </div>
  )
}

const InputBox = () =>{
    const [data, setData] = useState("")
    const handleInputChange = (e)=>{
        setData(e.target.value);
    }
    return(
        <input
          className="form-control form-control-sm"
          disabled
          id="txt_SamNumber"
          name="SAM_NO"
          type="text"
          value={data}
          onChange={handleInputChange}
        />
    )
}

export default FollowupFormTable