import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchEmployees, setFilter, setSort } from "../../store/actions";
import EmployeeFilters from "./EmployeesFiltrer";
import EmployeeTable from "./EmployeeTable";
import "./EmployeeStyle.scss";
import { Link } from "react-router-dom";

const EmployeeList = () => {
  const dispatch = useDispatch();
  const { loadning, employees, filter, sort } = useSelector(
    (state) => state.employees
  );

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const filteredEmployees = useMemo(() => {
    return employees
      .filter((emp) => (filter.role ? emp.role === filter.role : true))
      .filter((emp) => (filter.isArchive ? emp.isArchive === true : true))
      .sort((a, b) => {
        if (sort === "name") return a.name.localeCompare(b.name);
        if (sort === "birthday")
          return new Date(a.birthday) - new Date(b.birthday);
        return 0;
      });
  }, [employees, filter, sort]);

  return (
    <div className="list">
      <h1>Список сотрудников</h1>
      <div className="controls">
        <EmployeeFilters
          filter={filter}
          sort={sort}
          onFilterChange={(newFilter) => dispatch(setFilter(newFilter))}
          onSortChange={(newSort) => dispatch(setSort(newSort))}
        />
        <Link to="/new" className="button">
          Добавить нового сотрудника
        </Link>
      </div>
      {loadning ? (
        <p className="loading">Загрузка...</p>
      ) : (
        <EmployeeTable array={filteredEmployees} />
      )}
    </div>
  );
};

export default EmployeeList;
