import React from "react";
import Banner from "../../components/Banner";
import ActivityList from "../../components/ActivityList";

const HomePage = ({ data, setData }) => {
  return (
    <>
      <Banner data={data} setData={setData} />
      <ActivityList data={data} classes={"mt-5"} col={4} />
    </>
  );
};

export default HomePage;
