import React, { useState, useEffect } from "react";
import DefaultPage from "../defaultPage/DefaultPage";

const Analytics = () => {
  const [data, setData] = useState(false);
  useEffect(() => {
    setData(false);
 }, []);

  return data ? <h3>Component with Analytics</h3> 
  : <DefaultPage />;
};

export default Analytics;