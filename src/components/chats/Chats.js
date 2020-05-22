import React, { useState, useEffect } from "react";
import DefaultPage from "../defaultPage/DefaultPage";

const Chats = () => {
  const [data, setData] = useState(false);
  useEffect(() => {
    setData(false);
 }, []);

  return data ? <h3>Component with Chats</h3> 
  : <DefaultPage />;
};

export default Chats;