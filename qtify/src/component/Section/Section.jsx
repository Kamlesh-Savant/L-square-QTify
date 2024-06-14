import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import styles from './Section.module.css';
import axios from 'axios';

function Section() {
  const [data, setData] = useState([]);

  const getAlbums = async () => {
      try {
          const res = await axios.get('https://qtify-backend-labs.crio.do/albums/top');
          setData(res.data);
      } catch (err) {
          console.log("Error fetching albums:", err);
      }
  };

  useEffect(() => {
      getAlbums();
  }, []);

  return (
    <div className={styles.wrapper}>
        <div className={styles.topSection}>
            <h3>Top Albums</h3>
            <button className={styles.btnShowAll}>Show all</button>
        </div>
        <div className={styles.contentSection}>
            {data.map((album) => (
                <Card key={album.id} data={album} type='album' />
            ))}
        </div>
    </div>
);
  
}
export default Section;