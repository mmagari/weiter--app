import initialState from './initialState';
import { addTable, updateTable } from './actions';

const tablesReducer = (statePart = initialState.tables, action) => {
  switch (action.type) {
    case addTable:
      return [...statePart, action.payload];
    case updateTable:
      return statePart.map((table) =>
        table.id === action.payload.id ? { ...table, ...action.payload } : table
      );
    default:
      return statePart;
  }
};

export default tablesReducer;
