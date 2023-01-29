import Head from "next/head";
import Link from "next/link";
import getStaic1 from "../function/functionGetStatic";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";

export default function Home(props) {
  console.log(props);
  //appel api
  const [state, setState] = useState(false);
  //affichage de l'api sur la page
  useEffect(() => {
    newWord();
  }, []);
  //fetch de l'url ou ce trouve l'api
  const newWord = async () => {
    await fetch("/api/apiCreate")
      .then((response) => response.json())
      .then((data) => setState(data));
    console.log(state);
  };
  console.log("******state de index page******" + state);
  console.log(state);

  // pour que le state fonctionne au hasard des demandes car l'objet est trop grand pour etre affiché
  // let randomWord;
  // if (state) {
  //   const array3 = state.englishList[0].data;
  //   randomWord = array3[Math.floor(Math.random() * array3.length)].en;
  //   console.log(randomWord);
  // }
  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/photo-thierry.jpg" />
        <title>Next js avec unzo </title>
      </Head>
      <main className="index_main">
        <div className={styles.description}>
          <h1 className="accueil_h1">Accueil</h1>
          <h2 className={styles.accueil_h2}>Veux-tu apprendre l'anglais</h2>
          <h2 className={styles.accueil_h2}>
            Mot au hassard de la base de donnée fichier listes.json dans le
            dossier data
          </h2>
          <button onClick={newWord} className={styles.index_button}>
            Get random Words
          </button>
          <h2 className="styles index_h2"></h2>
          <table className={styles.tableau}>
            <tbody>
              {props.arrayVocabulary.map((el) => (
                <tr className={styles.tableau_tr}>
                  <td className={styles.tableau_td}>{el.en}</td>
                  <td className={styles.tableau_td}>{el.fr}</td>
                  <td className={styles.tableau_td}></td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="accueil_p">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
            non error sunt eveniet, optio nesciunt facere molestiae minus velit
            soluta consequatur quod aperiam quia, corporis corrupti, nulla fugit
            dolore cum? Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Eius laudantium nesciunt vitae accusantium accusamus placeat
            labore nostrum rerum deleniti fugit atque ullam sint beatae alias,
            iusto dolore iure quia nemo! Commodi numquam modi, nisi repellat
            assumenda ad rem atque aliquid, aspernatur cupiditate ex quam nihil.
            Sed facere saepe iure odio quas eligendi inventore totam amet,
            delectus maiores consequuntur molestiae reiciendis. Explicabo
            aperiam rem iusto officia necessitatibus quasi sequi repellat beatae
            distinctio. Perspiciatis, deserunt ullam cum tempore aliquam, hic
            molestias, assumenda eligendi id dolorem tenetur ab esse quisquam!
            Dolores, at dolorem. Quo dolorum quidem accusantium facere ipsam
            numquam! Eaque dolores mollitia harum, eveniet sapiente rem
            consectetur. Eum maxime, consequuntur officiis odio et error cum,
            expedita sapiente atque accusantium id architecto accusamus!
            Exercitationem ipsa tenetur aspernatur, sapiente tempore magni eum
            neque reiciendis quaerat! Exercitationem illo maiores cupiditate
            illum, consectetur ullam dolore reiciendis impedit corrupti rem
            ratione nemo fuga delectus hic harum saepe. Architecto mollitia
            eveniet quo ullam corporis velit quas blanditiis earum ipsam ad.
            Libero cum blanditiis amet praesentium consequuntur iusto omnis
            mollitia! Culpa exercitationem sit ipsa nisi natus fuga quo
            delectus? Quisquam veniam nisi sapiente voluptatibus enim harum
            eveniet est alias corrupti et assumenda libero fugit autem,
            cupiditate sed qui tempora ipsum. Ut explicabo fugit eligendi soluta
            deleniti. Aut, totam libero. Voluptatum enim perspiciatis excepturi
            eligendi pariatur. Officia nisi recusandae error asperiores velit
            dolorem quaerat voluptatibus cum libero eius quae, soluta quia autem
            doloribus eligendi, doloremque illo. Laboriosam qui unde et. Nam
            quia facere sapiente possimus fugiat neque autem, provident
            perspiciatis. Harum cumque cupiditate officiis dolorum mollitia
            dolor, quidem soluta! Minus sint corporis voluptatum possimus fuga
            corrupti dicta sequi quis itaque? Atque sed dolore eos molestias
            optio quia modi ipsa quidem ea? Voluptate sit soluta nisi porro
            quaerat? Ad nulla, tempore facilis ea voluptas delectus ducimus
            maiores voluptatem minima? Sed, magnam. Praesentium nisi enim ullam
          </p>
        </div>
      </main>
    </>
  );
}
export async function getStaticProps() {
  const data = await import(`../data/vocabulary.json`);
  const arrayVocabulary = data.vocabulary;
  return {
    props: {
      arrayVocabulary,
    },
  };
}
