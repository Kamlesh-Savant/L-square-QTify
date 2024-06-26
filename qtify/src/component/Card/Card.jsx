import React from "react";
import Chip from "@mui/material/Chip";
import styles from "./Card.module.css";
import { Tooltip } from "@mui/material";

function Card({ data, type }) {
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { image, follows, title, songs, slug } = data;
        return (
          <Tooltip title={`${songs.length} songs`} placement="top" arrow>
            <a href={`/album/${slug}`}>
              <div className={styles.wraper}>
                <div className={styles.card}>
                  <img src={image} alt="album" loading="lazy" />
                  <div className={styles.banner}>
                    <Chip
                      label={`${follows} Follows`}
                      className={styles.chip}
                      size="small"
                    />
                  </div>
                </div>

                <div className={styles.titleWrapper}>
                  <p>{title}</p>
                </div>
              </div>
            </a>
          </Tooltip>
        );
      }
      case "song": {
        const { image, likes, title } = data;
        return (
          <div className={styles.wraper}>
            <div className={styles.card}>
              <img src={image} alt="song" loading="lazy" />
              <div className={styles.banner}>
                <div className={styles.capsule}>
                  <p>{likes} Likes</p>
                </div>
              </div>
            </div>

            <div className={styles.titleWrapper}>
              <p>{title}</p>
            </div>
          </div>
        );
      }
      default:
        return <></>;
    }
  };

  return getCard(type);
}

export default Card;
