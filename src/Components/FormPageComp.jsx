import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Table, Pagination } from 'react-bootstrap';
import "../pagestyle.css"
import SearchComp from "./SearchComp";
import TableComp from './TableComp';

const styles = {
  a:{
    textDecoration: "none",
    color: "white",
  }
};
function FormPageComp(props) {

  const [tableData, setTableData] = useState(props.initialTableData);

  const handleSearch = (searchCriteria) => {
    // const isEmptySearch = Object.values(searchCriteria).every(value => value === "");
    const isEmptySearch = !searchCriteria.recordNo && !searchCriteria.samNo && !searchCriteria.childName;

    if (isEmptySearch) {
      setTableData(props.initialTableData); // Show full list if all empty
    } else {
      // Optionally process search criteria before filtering
      const filteredData = filterData(tableData, searchCriteria);
      setTableData(filteredData);
    }
    // if (!searchCriteria.recordNo && !searchCriteria.samNo && !searchCriteria.childName) {
    //   setTableData(props.initialTableData); // Include all items if no search criteria
    // }else{
    //   // Optionally process search criteria before filtering
    //   const filteredData = filterData(tableData, searchCriteria);
    //   setTableData(filteredData);
    // }
  };

  const filterData = (data, searchCriteria) => {
    // Implement your custom filtering logic here based on search criteria
    // This example demonstrates filtering by multiple fields
  
    const filtered = data.filter((item) => {
      let matches = true;
  
      // Filter by record number (case-insensitive)
      if (searchCriteria.recordNo) {
        const ridStr = String(item.rid); // Convert rid to string
        matches = matches && ridStr.toLowerCase().includes(searchCriteria.recordNo.toLowerCase());
      }
      //Filter by Sam Number
      if (searchCriteria.samNo) {
        const samNoStr = String(item.samNo); // Convert rid to string
        matches = matches && samNoStr.toLowerCase().includes(searchCriteria.samNo.toLowerCase());
      }
      if (searchCriteria.childName) {

        matches = matches && item.childName.toLowerCase().includes(searchCriteria.childName.toLowerCase());
      }
      // if (!searchCriteria.samNo) {
      //   // const samNoStr = String(item.samNo);
      //   // matches = matches && samNoStr.toLowerCase().includes("jh");
      //   return false;
      // }
      
    
  
      // Filter by other fields as needed
      // ...
  
      return matches;
    });
  
    return filtered;
  };
  return (
    <div className='boxCon' style={{border: "2px solod black"}}>
        <div className='titleBox d-flex'>
            {/* name + Add button */}
            <h1>{props.name}</h1>
            {props.add ?<Button><a style={styles.a} href={props.add}> Add + </a></Button> :  <></>}
        </div>
        <div>
          {/* //search component  */}
        <SearchComp tableData={tableData} onSearch={handleSearch} />
            
        {/* table COMPONENT  */}
        <h1>{props.description}</h1>
        <TableComp tableHead={props.tableHead} tableData={tableData} onRowClick={props.onRowClick} />
        </div>
    </div>
  )
}

export default FormPageComp