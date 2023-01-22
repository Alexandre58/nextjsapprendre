import React from "react";
import Image from "next/image";
import img1 from "../public/assets/img1.jpg";
import img2 from "../public/assets/img2.jpg";
import img3 from "../public/assets/img3.jpg";
import style from "../styles/gallery.module.css";
const gallery = () => {
  return (
    <main>
      <h1>coucou</h1>
      <section className={style.gallery_main_section}>
        <Image src={img1} className={style.imagesAssets} placeholder="blur" />
        <Image src={img2} className={style.imagesAssets} placeholder="blur" />
        <Image src={img3} className={style.imagesAssets} placeholder="blur" />
        {/**  <img src="/assets/img1.jpg" alt="" />
      <img src="/assets/img2.jpg" alt="" />
      <img src="/assets/img3.jpg" alt="" />*/}
      </section>
    </main>
  );
};

export default gallery;
