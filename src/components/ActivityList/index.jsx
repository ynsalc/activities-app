import React from "react";
import Activity from "./Activity/index";
import "./index.scss";

const ActivityList = ({ classes, data, col }) => {
  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className={classes ? `row ${classes}` : "row"}>
        {data?.map((item) => (
          <Activity key={item.id} col={col} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ActivityList;
