import React from "react";
import Image from "next/image";
import styles from "../styles/components/ProjectCard.module.css";

export default function ProjectCard({ url, alttext }) {
  return (
    <div class={styles.card}>
      <div class={styles.image_container}>
        <Image
          class={styles.card__image}
          src={url}
          alt={alttext}
          layout="responsive"
          width={100}
          height={70}
        />
      </div>
      <div className={styles.description}>
        <h1>Project Name</h1>
        <p>
          Project Description dolor sit amet consectetur adipisicing elit.
          Impedit pariatur necessitatibus vero porro sint nobis ab aliquid amet
          doloribus aperiam animi beatae quaerat unde eius vel aspernatur,
          dolorum libero dignissimos.
        </p>
      </div>
    </div>
  );
}
