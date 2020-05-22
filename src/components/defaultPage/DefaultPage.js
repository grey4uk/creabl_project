import React from "react";
import css from "./DefaultPage.module.css";
import img from "../../assets/images/def_ico.svg";

const DefaultPage = () => {
  return (
    <div className={css.defaultPageContainer}>
      <div className={css.defaultPageContent}>
        <img
          src={img}
          alt="img"
          width="72.42"
          height="72.42"
          className={css.defaultPageImg}
        />
        <p style={{color:'#29354B', fontWeight:'600', marginBottom:'12px'}}>We’re working on this page now!</p>
        <p>You will definetely know when it will be ready</p>
      </div>
    </div>
  );
};

export default DefaultPage;
