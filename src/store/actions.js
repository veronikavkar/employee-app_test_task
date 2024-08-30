import initialEmployees from "../data/employeesData"; // Импорт начального массива сотрудников

export const fetchEmployees = () => (dispatch) => {
  return new Promise((resolve) => {
    dispatch({ type: "FETCH_EMPLOYEES_REQUEST" });
    setTimeout(() => {
      // Проверяем, есть ли данные в localStorage
      const storedEmployees = localStorage.getItem("employeesState");

      if (!storedEmployees) {
        // Если данных нет, сохраняем изначальный массив сотрудников
        localStorage.setItem(
          "employeesState",
          JSON.stringify(initialEmployees)
        );

        // Также добавляем их в Redux
        dispatch(setEmployees(initialEmployees));
        resolve(initialEmployees);
      } else {
        // Если данные уже есть, парсим их и сохраняем в Redux
        const employees = JSON.parse(storedEmployees);
        dispatch(setEmployees(employees));
        resolve(employees);
      }
    }, 1000); // Имитируем задержку запроса
  });
};
export const setEmployees = (employees) => ({
  type: "SET_EMPLOYEES",
  payload: employees,
});

export const setFilter = (filter) => ({
  type: "SET_FILTER",
  payload: filter,
});

export const setSort = (sort) => ({
  type: "SET_SORT",
  payload: sort,
});
export const addEmployee = (employee) => {
  return (dispatch, getState) => {
    // Добавляем сотрудника в Redux-состояние
    dispatch({ type: "ADD_EMPLOYEE", payload: employee });

    // Получаем текущее состояние сотрудников после добавления нового
    const { employees } = getState().employees;

    // Обновляем localStorage новым списком сотрудников
    localStorage.setItem("employeesState", JSON.stringify(employees));
  };
};

export const updateEmployee = (employee) => {
  return (dispatch, getState) => {
    dispatch({ type: "UPDATE_EMPLOYEE", payload: employee });
    const { employees } = getState().employees;
    localStorage.setItem("employeesState", JSON.stringify(employees));
  };
};
