import React from 'react';
import styles from './SingleTable.module.scss';

const TableStatusSelect = ({ status, onChange }) => {
  return (
    <div>
      <label>Status:</label>
      <select
        value={status}
        className={styles.tableStatus}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="Free">Free</option>
        <option value="Reserved">Reserved</option>
        <option value="Busy">Busy</option>
        <option value="Cleaning">Cleaning</option>
      </select>
    </div>
  );
};

export default TableStatusSelect;
