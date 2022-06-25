import React, { useEffect, useState } from "react";
import Datetime from "../Common/Datetime";
import "./index.scss";

const Banner = ({ data, setData }) => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const applyFilter = () => {
    let updateFilter = data;

    if (startDate !== null && endDate !== null) {
      const sDate = Number(startDate?.slice(0, 2));
      const eDate = Number(endDate?.slice(0, 2));
      updateFilter = data.filter(
        (item) =>
          Number(item.startDate.slice(0, 2)) >= sDate &&
          Number(item.endDate.slice(0, 2)) <= eDate
      );
    }

    setData(updateFilter);
  };

  useEffect(() => {
    applyFilter();
  }, [startDate, endDate]);

  return (
    <>
      <section className="banner-section mt-2">
        <div className="container rounded shadow-lg bg-light p-3">
          <div className="form-row">
            <Datetime title={"Başlangıç Tarihi"} setDate={setStartDate} />
            <Datetime title={"Bitiş Tarihi"} setDate={setEndDate} />
          </div>
        </div>
      </section>
      <div className="banner-text-field">
        <h3 className="text-center">İncele, bilet al ve katıl!</h3>
        <p className="text-center">
          Tarih bilgilerini girerek etkinlikleri listele!
        </p>
      </div>
    </>
  );
};

export default Banner;
