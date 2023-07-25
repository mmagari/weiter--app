import React from 'react';
import styles from './SingleTable.module.scss';

const PeopleInputs = ({ peopleAmount, maxPeopleAmount, onInputChange }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let parsedValue = parseInt(value, 10);
    if (isNaN(parsedValue) || parsedValue < 0) {
      parsedValue = 0;
    } else if (parsedValue > 10) {
      parsedValue = 10;
    }

    if (name === 'maxPeopleAmount' && parsedValue < peopleAmount) {
      onInputChange({ [name]: parsedValue, peopleAmount: parsedValue });
    } else {
      onInputChange({ [name]: parsedValue });
    }
  };

  return (
    <div>
      <label>People:</label>
      <input
        className={styles.peopleAmount}
        type="number"
        name="peopleAmount"
        value={peopleAmount}
        onChange={handleInputChange}
        onBlur={handleInputChange}
        min="0"
        max="10"
      />
      <span> / </span>
      <input
        className={styles.peopleAmount}
        type="number"
        name="maxPeopleAmount"
        value={maxPeopleAmount}
        onChange={handleInputChange}
        onBlur={handleInputChange}
        min="0"
        max="10"
      />
    </div>
  );
};

export default PeopleInputs;
