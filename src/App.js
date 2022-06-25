import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";
import Activities from "./pages/Activities";
import dataList from "./mock-data/index";

function App() {
  const [activityData, setActivityData] = useState([]);

  useEffect(() => {
    setActivityData(dataList);
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<HomePage data={activityData} setData={setActivityData} />}
        />
        <Route path="/activities" element={<Activities />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
