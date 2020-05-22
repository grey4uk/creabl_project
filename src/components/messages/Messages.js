import React, { useState, useEffect } from "react";
import DefaultPage from "../defaultPage/DefaultPage";

const Messages = () => {
  const [data, setData] = useState(false);
  useEffect(() => {
    setData(false);
 }, []);

  return data ? <h3>Component with Messages</h3> 
  : <DefaultPage />;
};

export default Messages;