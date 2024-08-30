import React from "react";
import "./SelectStyle.scss";

const SelectFilter = ({ label, options, value, onChange }) => {
  return (
    <div className="select-wrapper">
      <label>{label}:</label>
      <select className="select" value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectFilter;
