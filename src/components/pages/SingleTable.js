import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateTable } from '../../redux/actions.js';
import TableStatusSelect from './TableStatusSelect';
import PeopleInputs from './PeopleInputs';
import BillInput from './BillInput';
import HandleUpdate from './HandleUpdate';
import HandleStatusChange from './HandleStatusChange.js';

const SingleTable = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [localTableData, setLocalTableData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleStatus = (status) => {
    HandleStatusChange(status, setLocalTableData);
  };

  const handleInputChange = (updatedData) => {
    setLocalTableData((prevData) => ({ ...prevData, ...updatedData }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:3131/tables/${id}`);
        if (response.ok) {
          const data = await response.json();
          dispatch(updateTable(data));
          setLocalTableData(data); 
        } else {
          navigate('/'); 
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, dispatch, navigate]);

  const handleBillChange = (value) => {
    setLocalTableData((prevData) => ({ ...prevData, bill: value }));
  };
  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!localTableData) {
    return <div>Table not found</div>;
  }

  return (
    <div>
      <h1>Table {localTableData.id}</h1>
      <TableStatusSelect status={localTableData.status} onChange={handleStatus} />      
      <PeopleInputs
        peopleAmount={localTableData.peopleAmount}
        maxPeopleAmount={localTableData.maxPeopleAmount}
        onInputChange={handleInputChange}
      />
      {localTableData.status === 'Busy' && (
        <BillInput bill={localTableData.bill} onBillChange={handleBillChange} />
      )}
      <HandleUpdate localTableData={localTableData} />
    </div>
  );
};

export default SingleTable;