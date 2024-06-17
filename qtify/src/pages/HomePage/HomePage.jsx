import React from 'react';
import Section from '../../component/Section/Section';
import Hero from '../../component/Hero/Hero';
import { useOutletContext } from 'react-router-dom';
import styles from './HomePage.module.css';



function HomePage() {
  const {data} = useOutletContext();
  const {newAlbums, topAlbums} = data;
  return (
        <>
        <Hero/>
        <div className={styles.wraper}>
          <Section title="Top Album" data={topAlbums} type="album"/>
          <Section title="New Album" data={newAlbums} type="album"/>
        </div>
        </>
  );
}

export default HomePage