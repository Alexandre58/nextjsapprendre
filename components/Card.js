import React from "react";
import styles from "../components/styles/card.module.css";

const Card = (props) => {
  const handleClic = () => {
    console.log(props);
  };
  return (
    <>
      <div>
        <h1>Card</h1>
      </div>
      <button onClick={handleClic} className="styles button_indexProfil">
        ValiderProps de Card.js
      </button>

      <h2>{props.title}</h2>
      <h2 className={styles.profil_h2}>
        {props.title ? ` "Cool" ${props.title}` : "Title not exist"}
      </h2>
    </>
  );
};

export default Card;
