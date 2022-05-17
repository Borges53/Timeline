import React from "react";
import styles from "./item.module.css";
export default function item({ data, index }) {
  const { title, description, content } = data;
  return (
    <div className={styles["container-item"]}>
      <div className={styles["container-content-item"]}>
        <div className={styles["container-content-header"]}>
          <span className={ `${styles["container-content-header-time"]} ${styles['container-roadmap-items']}`}>
            {title}
          </span>
          <span className={styles["container-content-header-title"]}>{description}</span>
        </div>
        <ul className={styles["container-content-list"]}>
          {content.map((item, index) => (
            <li key={item.title} className={styles["li-outside"]}>
              {item.title}
              <ul>
                {item.subtitles.map((item, index) => (
                  <span className={styles["contcont"]} key={item}>
                    🞄&nbsp;
                    <li className={styles["li-inside"]}>{item}</li>
                  </span>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
