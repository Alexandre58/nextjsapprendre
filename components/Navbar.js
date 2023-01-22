import React from "react";
import Link from "next/link";
import style from "./styles/navBar.module.css";
const Navbar = () => {
  const id = "article";
  return (
    <>
      <nav className={style.navbarjs_container}>
        <Link href="/blog">Blog </Link>
        <Link href="/blog/monblog">Mon Blog perso</Link>
        <Link href={`/blog/${id}`}>Article</Link>
        <Link href="/blog/articleavecslug">Article slug</Link>
        <Link href="/blog/article">Article [...slug]</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </>
  );
};

export default Navbar;
