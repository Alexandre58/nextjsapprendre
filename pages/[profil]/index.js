import Card from "@/components/Card";
import Objet from "@/components/objet";
import React, { useState } from "react";
import styles from "../../styles/profil.module.css";
const index = () => {
  //useState compteur par exemple
  const [likes, setLikes] = useState(0);
  console.log(likes);
  //tableau de nom
  const names = [
    "Thierry ALEXANDRE",
    "Ada Lovelace",
    "Grace Hopper",
    "Margaret Hamilton",
  ];
  const locataire = {};

  const handleClic = () => {
    console.log("Bonjour de profil");
    console.log("****index de profil*****************");
    console.log(names);
    console.log("*********************");
  };
  const countLikes = () => {
    console.log("compte les likes");
    setLikes(likes + 1);
  };

  return (
    <>
      <div>
        <h1 className="profil_h1">Votre profil</h1>
        <button onClick={handleClic} className={styles.button_indexProfil}>
          ValiderProps de profils
        </button>
        <button onClick={countLikes} className={styles.button_indexProfil}>
          like({likes})
        </button>
        <h2>{likes}</h2>
        <ul>
          {names.map((name, id) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
        <p>
          le dossier profil va fonctionner avec localhost:3000/thierry dans
          l'url. par exemple
        </p>
        <p>Fonctionne avec des noms d'url dynamique</p>
      </div>
      <Card title=" Props de React " />
      <Card title=" Props de React2 " />
      <Card title={names.join("__ ")} />
      <Objet />
    </>
  );
};

export default index;
