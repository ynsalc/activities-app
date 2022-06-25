import React from "react";
import ActivityList from "../../components/ActivityList";
import FilterPanel from "../../components/FilterPanel";
import dataList from "../../mock-data";

const Activities = () => {
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-md-4">
            <FilterPanel />
        </div>
        <div className="col-md-8">
            <ActivityList data={dataList} col={4}/>
        </div>
      </div>
    </div>
  );
};

export default Activities;
