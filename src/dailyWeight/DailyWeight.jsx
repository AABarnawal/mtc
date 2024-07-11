
  import React from 'react'
  import FormPageComp from '../Components/FormPageComp'
  
  
  const tableHead = [
    { Header: 'Record No', accessor: 'Record' },
    { Header: 'SAM Number', accessor: 'SAM' },
    { Header: 'Child Name', accessor: 'Child' },
    { Header: 'Parent Name', accessor: 'Parent' },
    { Header: 'Date Of Birth', accessor: 'Date' },
    { Header: 'Admission Weight', accessor: 'weight' },
    { Header: 'Admission Height', accessor: 'height' } // Assuming 'Edit' is a link or data for the "Details" column
  ];
  const initialTableData = [
    { id: 1, Record: '12345', SAM: 'ABC123', Child: 'John Doe', Parent: 'Jane Doe', Date: '2024-06-20', weight: '5 kg', height: '70 cm' },
    { id: 1, Record: '12345', SAM: 'ABC123', Child: 'John Doe', Parent: 'Jane Doe', Date: '2024-06-20', weight: '5 kg', height: '70 cm' },
    { id: 1, Record: '12345', SAM: 'ABC123', Child: 'John Doe', Parent: 'Jane Doe', Date: '2024-06-20', weight: '5 kg', height: '70 cm' }, // Assuming 'Edit' is a link
    { id: 1, Record: '12345', SAM: 'ABC123', Child: 'John Doe', Parent: 'Jane Doe', Date: '2024-06-20', weight: '5 kg', height: '70 cm' },
    { id: 1, Record: '12345', SAM: 'ABC123', Child: 'John Doe', Parent: 'Jane Doe', Date: '2024-06-20', weight: '5 kg', height: '70 cm' },
    { id: 1, Record: '1345', SAM: 'ABC123', Child: 'John Doe', Parent: 'Jane Doe', Date: '2024-06-20', weight: '5 kg', height: '70 cm' },
    { id: 1, Record: '135', SAM: 'ABC123', Child: 'John Doe', Parent: 'Jane Doe', Date: '2024-06-20', weight: '5 kg', height: '70 cm',},
    { id: 1, Record: '1235', SAM: 'ABC123', Child: 'John Doe', Parent: 'Jane Doe', Date: '2024-06-20', weight: '5 kg', height: '70 cm' },
    { id: 1, Record: '1235', SAM: 'ABC123', Child: 'John Doe', Parent: 'Jane Doe', Date: '2024-06-20', weight: '5 kg', height: '70 cm' },
    { id: 1, Record: '123', SAM: 'ABC123', Child: 'John Doe', Parent: 'Jane Doe', Date: '2024-06-20', weight: '5 kg', height: '70 cm',},
    { id: 1, Record: '1234', SAM: 'ABC123', Child: 'John Doe', Parent: 'Jane Doe', Date: '2024-06-20', weight: '5 kg', height: '70 cm' },
    { id: 1, Record: '1234', SAM: 'ABC123', Child: 'John Doe', Parent: 'Jane Doe', Date: '2024-06-20', weight: '5 kg', height: '70 cm' },
    { id: 1, Record: '1234', SAM: 'ABC123', Child: 'John Doe', Parent: 'Jane Doe', Date: '2024-06-20', weight: '5 kg', height: '70 cm' },
    { id: 1, Record: '1234', SAM: 'ABC123', Child: 'John Doe', Parent: 'Jane Doe', Date: '2024-06-20', weight: '5 kg', height: '70 cm' },
    { id: 1, Record: '1234', SAM: 'ABC123', Child: 'John Doe', Parent: 'Jane Doe', Date: '2024-06-20', weight: '5 kg', height: '70 cm' },
    { id: 1, Record: '234', SAM: 'ABC123', Child: 'John Doe', Parent: 'Jane Doe', Date: '2024-06-20', weight: '5 kg', height: '70 cm',},
    { id: 1, Record: '2', SAM: 'ABC123', Child: 'John Doe', Parent: 'Jane Doe', Date: '2024-06-20', weight: '5 kg', height: '70 cm'},
    { id: 1, Record: '12', SAM: 'ABC123', Child: 'John Doe', Parent: 'Jane Doe', Date: '2024-06-20', weight: '5 kg', height: '70 cm' },
    { id: 1, Record: '12', SAM: 'ABC123', Child: 'John Doe', Parent: 'Jane Doe', Date: '2024-06-20', weight: '5 kg', height: '70 cm' },
    { id: 1, Record: '12', SAM: 'ABC123', Child: 'John Doe', Parent: 'Jane Doe', Date: '2024-06-20', weight: '5 kg', height: '70 cm' },
    { id: 1, Record: '12', SAM: 'ABC123', Child: 'John Doe', Parent: 'Jane Doe', Date: '2024-06-20', weight: '5 kg', height: '70 cm' },
    { id: 1, Record: '12', SAM: 'ABC123', Child: 'John Doe', Parent: 'Jane Doe', Date: '2024-06-20', weight: '5 kg', height: '70 cm' },
    { id: 1, Record: '12', SAM: 'ABC123', Child: 'John Doe', Parent: 'Jane Doe', Date: '2024-06-20', weight: '5 kg', height: '70 cm' },
    { id: 1, Record: '12', SAM: 'ABC123', Child: 'John Doe', Parent: 'Jane Doe', Date: '2024-06-20', weight: '5 kg', height: '70 cm' },
  
    // ... more data objects
  ];
  function DailyWeight() {
    return (
      <div className='p-5 mt-5'>
        <FormPageComp 
        name="Daily Weight Entry" 
        Description="List of Children Currently Admitted" 
        initialTableData={initialTableData} 
        tableHead={tableHead}
        onRowClick="/DashBoard/WeightDetails" />
      </div>
    )
  }
  
  export default DailyWeight