const HandleStatusChange = (status, setLocalTableData) => {
  if (status === 'Busy') {
    setLocalTableData((prevData) => ({ ...prevData, status, bill: 0 }));
  } else {
    setLocalTableData((prevData) => ({ ...prevData, status }));
  }

  if (status === 'Cleaning' || status === 'Free') {
    setLocalTableData((prevData) => ({ ...prevData, peopleAmount: 0 }));
  }
};

export default HandleStatusChange;