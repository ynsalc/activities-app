import React from "react";

const FilterPanel = () => {
  return (
    <div className="container">
      <div className="filter-group">
        <label className="custom-control custom-checkbox">
          <input type="checkbox" checked="" className="custom-control-input" />
          <div className="custom-control-label">Mercedes</div>
        </label>
      </div>
    </div>
  );
};

export default FilterPanel;
