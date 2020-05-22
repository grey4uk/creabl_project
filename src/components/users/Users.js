import React, { useState, useEffect } from "react";
import DefaultPage from "../defaultPage/DefaultPage";

const Users = () => {
  const [data, setData] = useState(false);
  useEffect(() => {
    setData(false);
 }, []);

  return data ? <h3>Component with Users Data</h3> 
  : <DefaultPage />;
};

export default Users;
