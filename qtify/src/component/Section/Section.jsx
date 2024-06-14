import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import styles from './Section.module.css';
import axios from 'axios';

function Section() {
  const [dataTop, setDataTop] = useState([]);
  const [dataNew, setDataNew] = useState([]);


  const getTopAlbums = async () => {
    try {
        const res = await axios.get('https://qtify-backend-labs.crio.do/albums/top');
        setDataTop(res.data);
    } catch (err) {
        console.log("Error fetching albums:", err);
    }
};

  const getNewAlbums = async () => {
      try {
          const res = await axios.get('https://qtify-backend-labs.crio.do/albums/new');
          setDataNew(res.data);
      } catch (err) {
          console.log("Error fetching albums:", err);
      }
  };

  useEffect(() => {
      getTopAlbums();
      getNewAlbums();
  }, []);

  return (
    <>
    <div className={styles.wrapper}>
        <div className={styles.topSection}>
            <h3>Top Albums</h3>
            <button className={styles.btnShowAll}>Show all</button>
        </div>
        <div className={styles.contentSection}>
            {dataTop.map((album) => (
                <Card key={album.id} data={album} type='album' />
            ))}
        </div>
    </div>
    <div className={styles.wrapper}>
        <div className={styles.topSection}>
            <h3>New Albums</h3>
            <button className={styles.btnShowAll}>Show all</button>
        </div>
        <div className={styles.contentSection}>
            {dataNew.map((album) => (
                <Card key={album.id} data={album} type='album' />
            ))}
        </div>
    </div>
    </>
);
  
}
export default Section;