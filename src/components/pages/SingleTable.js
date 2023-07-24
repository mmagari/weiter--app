import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './SingleTable.module.scss';
import { Button } from 'react-bootstrap';

const SingleTable = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [tableData, setTableData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3131/tables/${id}`);
        if (!response.ok) {
          // If the response status is not OK (e.g., 404 Not Found), navigate to the main page (TableList)
          navigate('/'); // useNavigate('/'); for React Router v6
          return;
        }
        const data = await response.json();
        setTableData(data); // Ustawienie danych stolika w stanie komponentu
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id, navigate]);

  const handleStatusChange = (e) => {
    const status = e.target.value;

    // Jeśli status zostanie zmieniony na "Busy", zresetuj pole bill na 0
    if (status === 'Busy') {
      setTableData((prevData) => ({ ...prevData, status, bill: 0 }));
    } else {
      setTableData((prevData) => ({ ...prevData, status }));
    }

    // Jeśli status zostanie zmieniony na "Cleaning" lub "Free", zresetuj pole peopleAmount na 0
    if (status === 'Cleaning' || status === 'Free') {
      setTableData((prevData) => ({ ...prevData, peopleAmount: 0 }));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    // Ograniczenie wartości peopleAmount i maxPeopleAmount do zakresu 0-10
    let parsedValue = parseInt(value, 10);
    if (isNaN(parsedValue) || parsedValue < 0) {
      parsedValue = 0;
    } else if (parsedValue > 10) {
      parsedValue = 10;
    }
  
    // Jeśli zmieniamy maxPeopleAmount i jest mniejsze niż peopleAmount, ustaw peopleAmount na maxPeopleAmount
    if (name === 'maxPeopleAmount' && parsedValue < parseInt(tableData.peopleAmount, 10)) {
      setTableData((prevData) => ({
        ...prevData,
        [name]: parsedValue,
        peopleAmount: parsedValue, // Ustawienie peopleAmount na maxPeopleAmount
      }));
    } else {
      setTableData((prevData) => ({ ...prevData, [name]: parsedValue }));
    }
  };

  const handleUpdate = async () => {
    try {
      // Wyślij zaktualizowane dane na serwer za pomocą metody PUT
      const response = await fetch(`http://localhost:3131/tables/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tableData),
      });

      if (response.ok) {
        console.log('Data updated successfully!');
        navigate('/');
      } else {
        console.error('Failed to update data');
      }
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  if (!tableData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Table {tableData.id}</h1>
      <div>
        <label>Status:</label>
        <select
          value={tableData.status}
          className={styles.tableStatus}
          onChange={handleStatusChange}
        >
          <option value="Free">Free</option>
          <option value="Reserved">Reserved</option>
          <option value="Busy">Busy</option>
          <option value="Cleaning">Cleaning</option>
        </select>
      </div>
      <div>
        <label>People:</label>
          <input
            className={styles.peopleAmount}
            type="number"
            name="peopleAmount"
            value={tableData.peopleAmount}
            onBlur={handleInputChange}
            onChange={handleInputChange} // Obsługa zmiany wartości peopleAmount i maxPeopleAmount w jednej funkcji
            min="0"
            max="10"
          />
          <span> / </span>
          <input
            className={styles.peopleAmount}
            type="number"
            name="maxPeopleAmount"
            value={tableData.maxPeopleAmount}
            onBlur={handleInputChange}
            onChange={handleInputChange} // Obsługa zmiany wartości peopleAmount i maxPeopleAmount w jednej funkcji
            min="0"
            max="10"
          />
      </div>
      {tableData.status === 'Busy' && (
        <div>
          <label>Bill:</label>
          <input
            className={styles.billAmount}
            type="number"
            value={tableData.bill}
            onChange={(e) => setTableData({ ...tableData, bill: e.target.value })}
          />
        </div>
      )}
      <Button variant="primary" className={styles.button} onClick={handleUpdate}>
        Update
      </Button>
    </div>
  );
};

export default SingleTable;
