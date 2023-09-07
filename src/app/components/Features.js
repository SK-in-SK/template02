"use client";
import React, { useEffect, useRef } from "react";
import { HiDownload } from 'react-icons/hi';
import styles from "./Features.module.css";
import Image from "next/image";

import data from "../data.json";
import Citation from "./Citation";

export default function Features({ features }) {
  /** Array of publications */
  const publications = data.publications;
  /** Array of projects */
  const projects = data.projects;

  /** Array of useRefs */
  const domRef = useRef([]);

  /** Dedicated function to add useRefs */
  const addToRefs = (el) => {
    if (el && !domRef.current.includes(el)) {
      domRef.current.push(el);
    }
  };

  /** Intersection observer applied to slides */
  useEffect(() => {
    const ob = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle(
            styles["visible"],
            entry.isIntersecting
          );
          if (entry.isIntersecting) ob.unobserve(entry.target);
        });
      },
      {
        threshold: 0.15,
      }
    );
    domRef.current.forEach((ref) => {
      ob.observe(ref);
    });
  }, []);

  return (
    <div className={styles["feature_outer"]}>
        <section>

        {features.map((image, featureIndex) => (
          <div
            key={featureIndex}
            ref={addToRefs}
            id={`feature_${featureIndex}`}
            className={`${styles["feature_slide"]} ${styles["feature_slide" + featureIndex]}`}

          >
            <div
              className={`${styles["feature_inner_slide"]} ${
                styles["feature_inner_slide" + featureIndex]
              }`}
            >
              <div
                className={`${styles["feature_image_container"]} ${
                  styles["feature_image_container" + featureIndex]
                }`}
              >
                <Image
                  src={image.img}
                  alt={image.alt}
                  className={`${styles["feature_image"]} ${
                    styles["feature_image" + featureIndex]
                  }`}
                />
              </div>
              <div
                className={`${styles["feature_text"]} ${
                  styles["feature_text" + featureIndex]
                }`}
              >
                <h2>{image.title}</h2>
                <p>{image.text}</p>
              </div>
              <div
                className={`${styles["feature_projects"]} ${
                  styles["feature_projects" + featureIndex]
                }`}
              >
                <h3>Related Projects</h3>
                <ul>
                  {projects.map((project, projectIndex) => {
                    if (project.featured_index.includes(featureIndex)) {
                      return (
                        <li
                          key={projectIndex}
                          className={`${styles["feature_related_project"]} ${
                            styles["feature_related_project" + featureIndex]
                          }`}
                        >
                          <button className={styles.related_button}>
                            <span>{project.name}</span>
                          </button>
                        </li>
                      );
                    } else {
                      return null;
                    }
                  })}
                </ul>
              </div>
              <div
                className={`${styles["feature_publications"]} ${
                  styles["feature_publications" + featureIndex]
                }`}
              >
                <h3>Related Publications</h3>
                <ul>
                  {publications.map((publication, publicationIndex) => {
                    if (parseInt(publication.featured_index) === featureIndex) {
                      return (
                        <li
                          key={publicationIndex}
                          className={`${
                            styles["feature_related_publication"]
                          } ${
                            styles["feature_related_publication" + featureIndex]
                          }`}
                        >
                          <a href={publication.url}><HiDownload /></a>
                          <span>{publication.title}</span>
                        </li>
                      );
                    } else {
                      return null;
                    }
                  })}
                </ul>
              </div>
            </div>
          </div>
        ))}
        </section>
      </div>

  );
}
