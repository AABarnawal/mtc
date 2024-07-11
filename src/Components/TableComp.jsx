import React, {useState} from 'react';
import { Table, Button, Pagination } from 'react-bootstrap'; // Assuming Bootstrap for styling (adjust imports if using a different library)
import { useNavigate } from 'react-router-dom';

function TableComp({ tableHead, tableData, onRowClick }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  const handlePageSizeChange = (event) => setPageSize(parseInt(event.target.value));

  const paginatedData = tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  const navigate = useNavigate();

  
  return (
    <div className='p-4'>
      <select value={pageSize} onChange={handlePageSizeChange}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="25">25</option>
      </select>
      <span> Show entries: </span>

      <Table striped bordered hover>
        <thead>
          <tr>
            {tableHead.map((col) => (
              <th key={col.accessor || col}>
                {col.Header || col} {/* Handle optional accessor and Header props */}
              </th>
            ))}
            {/* Add a "Details" column if onRowClick function is provided */}
            {onRowClick && (
              <th key="details">Details</th>
            )}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item, index) => (
            <tr key={item.id || index}>
              {tableHead.map((col) => (
                <td key={`${col.accessor || col}-${index}`}>
                  {item[col.accessor || col]} {/* Handle optional accessor prop */}
                </td>
              ))}
              {/* Add a "Details" cell with a button if onRowClick function is provided */}
              
              {onRowClick && (
                <td>
                  <Button variant="primary" onClick={()=>{

                    navigate(onRowClick, { state: item });
                  }}>
                    Details
                  </Button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </Table>

      <Pagination>
        <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
        <Pagination.Item active={currentPage === 1} onClick={() => handlePageChange(1)}>
          1
        </Pagination.Item>
        {/* Show more page items if data goes beyond 2 pages */}
        {Math.ceil(tableData.length / pageSize) > 2 && (
          <>
            <Pagination.Ellipsis />
            <Pagination.Item active={currentPage === Math.ceil(tableData.length / pageSize)} onClick={() => handlePageChange(Math.ceil(tableData.length / pageSize))}>
              {Math.ceil(tableData.length / pageSize)}
            </Pagination.Item>
          </>
        )}
        <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === Math.ceil(tableData.length / pageSize)} />
      </Pagination>
    </div>
  );
}

export default TableComp;
