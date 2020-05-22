import React, { useState, useEffect } from "react";
import DefaultPage from "../defaultPage/DefaultPage";

const Settings = () => {
  const [data, setData] = useState(false);
  useEffect(() => {
     setData(false);
  }, []);

  return data ? <h3>Component with Settings</h3> 
  : <DefaultPage />;
};

export default Settings;