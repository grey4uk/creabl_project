import React, { useState, useEffect } from "react";
import DefaultPage from "../defaultPage/DefaultPage";

const Help = () => {
  const [data, setData] = useState(false);
  useEffect(() => {
    setData(false);
 }, []);

  return data ? <h3>Component with Help</h3> 
  : <DefaultPage />;
};

export default Help;