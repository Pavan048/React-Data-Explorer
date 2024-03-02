import React, { useState } from 'react';
import "./searchTable.css";

const ManageTable = ({ Data }) => {
  const [data, setData] = useState(Data); // All data
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);
  const [sortType, setSortType] = useState('date');

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    const filteredData = Data.filter(
      (item) =>
        item.customer_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setData(filteredData);
    setCurrentPage(1); // Reset to first page after filtering
  };

  const handleSort = (type) => {
    const sortedData = [...data];
    console.log(sortType);
    if (type === 'date') {
      sortedData.sort((a, b) => new Date(a.created_date) - new Date(b.created_date));
    } else if (type === 'time') {
      sortedData.sort((a, b) => new Date('1970/01/01 ' + a.created_time) - new Date('1970/01/01 ' + b.created_time));
    }
    setData(sortedData);
    setSortType(type);
  };

  // Logic to get current items based on pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Logic to paginate
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  // Function to change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='search-table-container'>
      <div className='search-container'>
        <form>
          <input
            type='text'
            placeholder='Enter name or location to search'
            value={searchTerm}
            onChange={handleSearch}
          />
        </form>
      </div>
      <div className='table-container'>
        <div className='sort-buttons'>
          <button onClick={() => handleSort('date')}>Sort by Date</button>
          <button onClick={() => handleSort('time')}>Sort by Time</button>
        </div>
        {currentItems.length > 0 ? (
          <table className='table'>
            <thead>
            <tr>
                <th rowspan="2">Sno</th>
                <th rowspan="2">Name</th>
                <th rowspan="2">Location</th>
                <th rowspan="2">Number</th>
                <th rowspan="2">Age</th>
                <th colspan="2">Created At</th>
            </tr>
            <tr>
                <th>Date</th>
                <th>Time</th>
            </tr>
            </thead>
            <tbody>
              {currentItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.sno}</td>
                  <td>{item.customer_name}</td>
                  <td>{item.age}</td>
                  <td>{item.phone}</td>
                  <td>{item.location}</td>
                  <td>{new Date(item.created_date).toLocaleDateString()}</td>
                  <td>{item.created_time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No matching records found.</p>
        )}
        {/* Pagination buttons */}
        <div className='pagination'>
          <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
            Previous
          </button>
          <div>
            {pageNumbers.map((number) => (
              <button key={number} onClick={() => paginate(number)}>
                {number}
              </button>
            ))}
          </div>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === Math.ceil(data.length / itemsPerPage)}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageTable;
