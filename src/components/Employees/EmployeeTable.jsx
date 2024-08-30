import React from "react";
import { Link } from "react-router-dom";

import "./EmployeeStyle.scss";
const EmployeeTable = ({ array }) => {
  return (
    <table className="employee-table">
      <thead>
        <tr>
          <th>Имя</th>
          <th>Должность</th>
          <th>Телефон</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {array.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.role}</td>
            <td>{item.phone}</td>
            <td>
              <Link to={`/edit/${item.id}`} className="edit-link">
                Редактировать
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
