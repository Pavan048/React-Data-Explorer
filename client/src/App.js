import ManageTable from "./components/ManageTable";
import React, { useState, useEffect } from 'react';

function App() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDataFromServer = async () => {
    try {
      const response = await fetch("http://localhost:5000/getAllRecords");
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
      if (data && data.length > 0) {
        setUserData(data);
      }
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataFromServer();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <ManageTable Data={userData} />
      )}
    </div>
  );
}

export default App;
