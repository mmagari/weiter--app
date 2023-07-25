import initialState from './initialState';
import { addTable, updateTable } from './actions';

export const getTables = state => state.tables;

const tablesReducer = (statePart = initialState.tables, action) => {
  switch (action.type) {
    case addTable:
      return [...statePart, action.payload]; // Dodajemy nowy stolik do tablicy
    case updateTable:
      return statePart.map((table) =>
        table.id === action.payload.id ? { ...table, ...action.payload } : table
      ); // Aktualizujemy dane istniejącego stolika
    default:
      return statePart;
  }
};

export default tablesReducer;


//const createActionName = actionName => `app/tables/${actionName}`;
