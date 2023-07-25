import React from 'react';
import { useDispatch } from 'react-redux';
import { updateTable } from '../../redux/actions.js';
import { useNavigate } from 'react-router-dom';
import styles from './SingleTable.module.scss';
import { Button } from 'react-bootstrap';

const HandleUpdate = ({ localTableData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = localTableData.id;

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:3131/tables/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(localTableData),
      });

      if (response.ok) {
        console.log('Data updated successfully!');
        dispatch(updateTable(localTableData));
        navigate('/');
      } else {
        console.error('Failed to update data');
      }
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  return (
    <Button variant="primary" className={styles.button}  onClick={handleUpdate}>Update</Button>
  );
};

export default HandleUpdate;
