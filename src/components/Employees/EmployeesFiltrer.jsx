import React from "react";
import SelectFilter from "../common/Select/SelectFilter";
import { roles, sortOptions } from "../../data/filters";
import "./EmployeeStyle.scss";

const EmployeeFilters = ({ filter, sort, onFilterChange, onSortChange }) => {
  return (
    <div className="filters">
      <SelectFilter
        label="Должность"
        value={filter.role}
        onChange={(e) => onFilterChange({ ...filter, role: e.target.value })}
        options={roles}
      />
      <label>
        В архиве:
        <input
          type="checkbox"
          checked={filter.isArchive}
          onChange={(e) =>
            onFilterChange({ ...filter, isArchive: e.target.checked })
          }
        />
      </label>
      <SelectFilter
        label="Сортировка"
        value={sort}
        onChange={(e) => onSortChange(e.target.value)}
        options={sortOptions}
      />
    </div>
  );
};

export default EmployeeFilters;
