import React from "react";
import Head from "next/head";
import Link from "next/link";

const index = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/photo-thierry.jpg" />
        <title>Mon blog</title>
      </Head>
      <div>
        <h1 className="index_blog_h1">Le BLOG</h1>
        <Link href={`/blog/1000 plats basque`}>10 plats basque</Link>

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

export default index;
