// actions.js
const ADD_TABLE = 'app/tables/ADD_TABLE';
const UPDATE_TABLE = 'app/tables/UPDATE_TABLE'; // Nowa akcja do aktualizacji danych stolika

export const addTable = (tableData) => ({
  type: ADD_TABLE,
  payload: tableData,
});

export const updateTable = (tableData) => ({
  type: UPDATE_TABLE,
  payload: tableData,
});
