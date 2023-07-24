// selectors
const getTables = state => state.tables; // Selektor zwracający całą tablicę z tabelami

// actions
const createActionName = actionName => `app/tables/${actionName}`;

const ADD_TABLE = createActionName('ADD_TABLE');

// action creators
export const addTable = tableData => ({
  type: ADD_TABLE,
  payload: tableData,
});

// reducer
const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_TABLE:
      return [...statePart, action.payload]; // Dodajemy nową tabelę do tablicy
    default:
      return statePart;
  };
};

export default tablesReducer;
