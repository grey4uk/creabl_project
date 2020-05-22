import React, { useState, useEffect } from "react";
import DefaultPage from "../defaultPage/DefaultPage";
import css from "./Sessions.module.css";

const Sessions = () => {
  const [data, setData] = useState(true);
  useEffect(() => {
    setData(true);
  }, []);

  return (
    data?
    <div className={css.sessionsContainer}>
      <div className={css.sessionsInfo}>
        <span>Analytics</span>
        <span>Default</span>
      </div>
      <div className={css.sessionsInfo}>
        <span style={{color:'#2361FF', fontWeight:'500'}}>Analytics</span>
        <span>Hover</span>
      </div>
      <div className={css.sessionsInfo}>
        <span style={{color:'#1E2A3B', fontWeight:'600'}}>Analytics</span>
        <span>Active</span>
      </div>
    </div>
    :<DefaultPage/>
  );
};

export default Sessions;
