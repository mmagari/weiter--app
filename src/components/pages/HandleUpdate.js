import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './SingleTable.module.scss';
import { Button } from 'react-bootstrap';
import { updateTableOnServer } from '../../redux/updateTableOnServer';

const HandleUpdate = ({ localTableData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = async () => {
    try {
      await dispatch(updateTableOnServer(localTableData)); // Użyj funkcji pośrednika updateTableOnServer
      console.log('Data updated successfully!');
      navigate('/');
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  return (
    <Button variant="primary" className={styles.button} onClick={handleUpdate}>
      Update
    </Button>
  );
};

export default HandleUpdate;
