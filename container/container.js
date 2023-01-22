import Navbar from "@/components/Navbar";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

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
        <button onClick={galleryPicture}>Gallery picture</button>

        <Navbar />
        {props.children}
      </div>
    </div>
  );
};

export default Container;
