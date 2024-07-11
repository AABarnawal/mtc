import React, { useState, useEffect } from 'react';
import { Table, Button, Pagination } from 'react-bootstrap'; // Assuming Bootstrap for styling (adjust imports if using a different library)
import axios from 'axios';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import {changeLogin} from '../redux/features/loginSlice'
import linkdata from '../link';
const tableHead = [
  { Header: 'MTC ID', accessor: 'mtcId' },
  { Header: 'MTC Code', accessor: 'mtcCode' },
  { Header: 'MTC Name', accessor: 'mtcName' },
  { Header: 'Bed', accessor: 'bed' },
  { Header: 'District ID', accessor: 'districtId' },
  { Header: 'District Name', accessor: 'districtName' }, // Assuming 'Edit' is data for the "Details" column
];

function LoginPageList() {
  const [responses, setResponses] = useState([]); // Use an array for data
  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null); // Handle potential errors
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null); // Clear previous errors
      
      try {
        // const response = await axios.get("http://192.168.0.164/api/MTCCenter/AllMTC");
        // const response = await axios.get("http://103.74.108.16/api/MTCCenter/AllMTC");
        const response = await axios.get(`${linkdata}api/MTCCenter/AllMTC`);
        setResponses(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  const handlePageSizeChange = (event) => setPageSize(parseInt(event.target.value, 10));

  const paginatedData = responses.slice((currentPage - 1) * pageSize, currentPage * pageSize);



  return (
    <div className='p-5'>
      {isLoading && <p>Loading data...</p>}
      {error && <p>Error fetching data: {error}</p>}
      {responses.length > 0 && (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                {tableHead.map((col) => (
                  <th key={col.accessor || col}>
                    {col.Header || col} {/* Handle optional accessor and Header props */}
                  </th>
                ))}
                <th key="details">Login To</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((item, index) => (
                <tr key={item.mtcId || index}>
                  {tableHead.map((col) => (
                    <td key={`${col.accessor || col}-${index}`}>
                      {item[col.accessor || col]} {/* Handle optional accessor prop */}
                    </td>
                  ))}
                  {/* Add a "Details" cell with a button if onRowClick function is provided */}
                  
                    <td>
                      <Button variant="primary" href='/DashBoard' onClick={()=>{
                        console.log(item)
                        sessionStorage.setItem('value', JSON.stringify(item))
                      }}>
                        log in
                      </Button>
                    </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="d-flex justify-content-between align-items-center">
            <select value={pageSize} onChange={handlePageSizeChange}>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </select>
            <Pagination>
              <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
              {[...Array(Math.ceil(responses.length / pageSize)).keys()].map(pageNumber => (
                <Pagination.Item
                  key={pageNumber + 1}
                  active={currentPage === pageNumber + 1}
                  onClick={() => handlePageChange(pageNumber + 1)}
                >
                  {pageNumber + 1}
                </Pagination.Item>
              ))}
              <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === Math.ceil(responses.length / pageSize)} />
            </Pagination>
          </div>
        </>
      )}
    </div>
  );
}

export default LoginPageList;
