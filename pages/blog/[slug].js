import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
const articleavecslug = () => {
  const router = useRouter();
  // console.log(router);
  // console.log(router.route);
  // console.log(router.asPath);
  // console.log(router.query);
  //function pour aller à l'accueuil par exemple avec router.push()
  const pushFunction = () => {
    router.push("/");
  };
  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/photo-thierry.jpg" />
        <title>{router.query.slug}</title>
      </Head>
      <div>
        <h1 className="articleavecslug">
          Article dinamique avec [slug]= {router.query.slug}
        </h1>
        <button onClick={pushFunction}>Push to home</button>
        <p className="articleavecslug_p">
          Permet d'appeler la page avec n'importe quoi dans l'url , par exemple
          :
          <br /> localhost:3000/blog/mdr
        </p>
        <p className="accueil_p">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
          non error sunt eveniet, optio nesciunt facere molestiae minus velit
          soluta consequatur quod aperiam quia, corporis corrupti, nulla fugit
          dolore cum? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Eius laudantium nesciunt vitae accusantium accusamus placeat labore
          nostrum rerum deleniti fugit atque ullam sint beatae alias, iusto
          dolore iure quia nemo! Commodi numquam modi, nisi repellat assumenda
          ad rem atque aliquid, aspernatur cupiditate ex quam nihil. Sed facere
          saepe iure odio quas eligendi inventore totam amet, delectus maiores
          consequuntur molestiae reiciendis. Explicabo aperiam rem iusto officia
          necessitatibus quasi sequi repellat beatae distinctio. Perspiciatis,
          deserunt ullam cum tempore aliquam, hic molestias, assumenda eligendi
          id dolorem tenetur ab esse quisquam! Dolores, at dolorem. Quo dolorum
          quidem accusantium facere ipsam
        </p>
        <p className="accueil_p">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
          non error sunt eveniet, optio nesciunt facere molestiae minus velit
          soluta consequatur quod aperiam quia, corporis corrupti, nulla fugit
          dolore cum? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Eius laudantium nesciunt vitae accusantium accusamus placeat labore
          nostrum rerum deleniti fugit atque ullam sint beatae alias, iusto
          dolore iure quia nemo! Commodi numquam modi, nisi repellat assumenda
          ad rem atque aliquid, aspernatur cupiditate ex quam nihil. Sed facere
          saepe iure odio quas eligendi inventore totam amet, delectus maiores
          consequuntur molestiae reiciendis. Explicabo aperiam rem iusto officia
          necessitatibus quasi sequi repellat beatae distinctio. Perspiciatis,
          deserunt ullam cum tempore aliquam, hic molestias, assumenda eligendi
          id dolorem tenetur ab esse quisquam! Dolores, at dolorem. Quo dolorum
          quidem accusantium facere ipsam
        </p>
      </div>
    </>
  );
};

export default articleavecslug;
