import React from 'react';
import styles from './SingleTable.module.scss';

const BillInput = ({ bill, onBillChange }) => {
  return (
    <div>
      <label>Bill:</label>
      <input
        className={styles.billAmount}
        type="number"
        value={bill}
        onChange={(e) => onBillChange(e.target.value)}
      />
    </div>
  );
};

export default BillInput;
