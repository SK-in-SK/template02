import styles from "./Principle.module.css";
import Image from "next/image";
import data from "../data.json";


export default function PrinciplePage({ siteName, links }) {
  return (
    <section className={styles.principle}>

      
        <div className={styles.principle_inner}>
          <div className={styles.principle_text}>
            <figure className={styles.principle_image_container}>
              <Image
                src={data.principle.image}
                alt={data.principle.name}
                className={styles.principle_image}
                width = {400}
                height = {600}
              />
              <figcaption className={styles.principle_image_caption}>{data.principle.name}<br/><span>{data.principle.title}</span></figcaption>
            </figure>
            <h1>{data.principle.biography.title}</h1>

            {data.principle.biography.content.map((element, index) => (
              <div key={index} className={styles.biography_block}>
                <h2>{element.subtitle}</h2>
                <p>{element.text}</p>
              </div>
            ))}
          </div>
        </div>
      

    </section>
  );
}
