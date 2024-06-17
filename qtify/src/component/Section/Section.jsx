import React, { useState } from "react";
import Card from "../Card/Card";
import styles from "./Section.module.css";

import { CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel";

function Section({ title, data, type }) {
  

  const [toggleForCarousel, setToggleForCarousel] = useState(true);

  const handleToggle = () => {
    setToggleForCarousel((prevState) => !prevState);
  };
  
  return (
    
      <div >
        <div className={styles.header}>
          <h3>{title}</h3>
          <h4 className={styles.btnShowAll} onClick={handleToggle}>
            {!toggleForCarousel ? "Collapse All" : "Show all"}
          </h4>
        </div>
        {data.length === 0 ? (
          <CircularProgress />
        ) : (
          <div className={styles.cardWrapper}>
            {!toggleForCarousel ? 
              <div className={styles.wrapper}>
              {data.map((album) => (
              <Card key={album.id} data={album} type={type} />
                ))}
            </div> 
            : <Carousel data={data} renderComponent={(data)=><Card data={data} type={type}/>} />}
          </div>
        )}
      </div>
      );
}
export default Section;
