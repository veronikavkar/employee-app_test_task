const initialState = {
  employees: [],
  loadning: false,
  error: null,
  successMessage: null,
  sort: "name",
  filter: {
    role: "", // Фильтрация по должности
    isArchive: false, // Фильтрация по статусу архива
  },
};

const employeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_EMPLOYEES_REQUEST":
      return {
        ...state,
        loadning: true,
      };
    case "FETCH_EMPLOYEES_FAILURE":
      return {
        ...state,
        loadning: false,
        error: action.payload,
      };
    case "SET_EMPLOYEES":
      return {
        ...state,
        loadning: false,
        employees: action.payload,
      };
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };
    case "SET_SORT":
      return {
        ...state,
        sort: action.payload,
      };
    case "ADD_EMPLOYEE":
      return {
        ...state,
        successMessage: "Сотрудник добавлен",
        employees: [...state.employees, action.payload],
      };
    case "UPDATE_EMPLOYEE":
      const updated = state.employees.map((employee) =>
        employee.id === action.payload.id
          ? { ...employee, ...action.payload }
          : employee
      );
      return {
        ...state,
        successMessage: "Сотрудник успешно изменен!",
        employees: updated,
      };
    default:
      return state;
  }
};

export default employeesReducer;
