import React, { useState, useEffect } 
from 'react';import { Button } from 'react-bootstrap';
import styles from "./TableList.module.scss";
import { Link } from 'react-router-dom';
import { API_URL } from '../../config.js';


const TableList = () => {
  const [tables, setTables] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/tables`);
        const data = await response.json();
        setTables(data); 
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>All Tables</h1>
      <ul>
        {tables.map((table) => (
          <li key={table.id}>
           <span className={styles.tableNumber}> Table {table.id}. </span> 
           <span className={styles.tableStatus}> Status: </span> {table.status}
           <Link to={`/tables/${table.id}`}>
            <Button variant="primary" id={table.id} className={styles.button}> Show More</Button>
           </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableList;