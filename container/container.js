import Navbar from "@/components/Navbar";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import style from "../components/styles/container.module.css";

const Container = (props) => {
  const router = useRouter();
  const accueil = "/";
  const galleryPicture = () => {
    router.push("/gallery");
  };
  return (
    <div className="container_body">
      <div className="container_navBar">
        <Link className="app_link" href={accueil}>
          accueil
        </Link>
        <button className={style.container_button} onClick={galleryPicture}>
          Gallery picture
        </button>

        <Navbar />
        {props.children}
      </div>
    </div>
  );
};

export default Container;
