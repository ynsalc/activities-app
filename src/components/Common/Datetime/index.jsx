import React, { useState, useEffect } from "react";
import moment from "moment";

const Datetime = ({ title, setDate }) => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (e) => {
    setSelectedDate(moment(e.target.value).format("YYYY-MM-DD"));
  };

  useEffect(() => {
    if (selectedDate !== moment(selectedDate).format("YYYY-MM-DD")) {
      setDate(null);
    } else {
      setDate(moment(selectedDate).format("DD.MM.YYYY"));
    }
  }, [selectedDate]);

  return (
    <div className="col-6">
      <label>{title}</label>
      <input
        type="date"
        className="form-control form-control-md font-weight-light"
        value={selectedDate}
        onChange={handleDateChange}
      />
    </div>
  );
};

export default Datetime;
