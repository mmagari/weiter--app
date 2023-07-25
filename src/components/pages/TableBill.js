import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import styles from './SingleTable.module.scss'

const TableBill = ({ tableData, onUpdate }) => {
  const [billAmount, setBillAmount] = useState(tableData.bill);

  const handleBillChange = (e) => {
    setBillAmount(e.target.value);
  };

  const handleUpdateBill = () => {
    const updatedData = { ...tableData, bill: billAmount };
    onUpdate(updatedData);
  };

  return (
    <div>
      <label>Bill:</label>
      <input
        className={styles.billAmount}
        type="number"
        value={billAmount}
        onChange={handleBillChange}
      />
      <Button variant="primary" className={styles.button} onClick={handleUpdateBill}>
        Update Bill
      </Button>
    </div>
  );
};

export default TableBill;
