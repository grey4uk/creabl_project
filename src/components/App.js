import React, { useState } from "react";
import css from "./App.module.css";
import Sidebar from "./sidebar/Sidebar";
import { SidebarRouting } from "./SidebarRouting";
import Sessions from "./sessions/Sessions";

const App = () => {
  const [flag, setFlag] = useState(true);

  const routing = SidebarRouting();
  const handleRoute = (e) => {
    console.log("Target",e.currentTarget.href);
    SidebarRouting(e.currentTarget.href);
    setFlag(false);
  };
  const closeModal = () => {
    setFlag(!flag);
  };

  return (
    <>
      {window.innerWidth < 768 &&
        (flag ? (
          <div className={css.container}>
            <Sidebar handleRoute={handleRoute} />
          </div>
        ) : (
          <div>
            {routing}
            <span className={css.closeButton} onClick={closeModal}>
              X
            </span>
          </div>
        ))}
      {window.innerWidth >= 768 && (
        <div className={css.desktopContainer}>
          <div className={css.container}>
            <Sidebar />
            <div className={css.content}>{routing}</div>
          </div>
          <div className={css.desktopSessions}>
            <Sessions />
          </div>
        </div>
      )}
    </>
  );
};

export default App;
