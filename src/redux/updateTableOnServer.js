import { updateTable } from './actions';
import { API_URL } from '../config';

export const updateTableOnServer = (tableData) => {
  return async (dispatch) => {
    const updatedData = tableData.status !== 'Busy' ? { ...tableData, bill: 0 } : tableData;
    try {
      const response = await fetch(`${API_URL}/tables/${tableData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        console.log('Data updated successfully!');
        dispatch(updateTable(updatedData));
      } else {
        console.error('Failed to update data');
      }
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };
};
