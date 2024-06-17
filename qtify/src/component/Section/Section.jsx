import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import styles from "./Section.module.css";

import { CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import Filters from "../Filters/Filters";

function Section({ title, data, filterSource,type }) {
  
  
  const [toggleForCarousel, setToggleForCarousel] = useState(true);

  const [filters, setFilters] = useState([{key:"all", label:"All"}]);
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);

  const handleToggle = () => {
    setToggleForCarousel((prevState) => !prevState);
  };

  useEffect(()=>{
    if(filterSource){
      filterSource().then((res)=>{
        const {data} = res;
        setFilters([...filters,...data]);
      });
    }
  },[]);
  
  const showFilters = filters.length > 1;


  const cardsToRender = data.filter((card) =>
      showFilters && selectedFilterIndex !== 0 ? card.genre.key === filters[selectedFilterIndex].key : card
  )
  return (
    
      <div >
        <div className={styles.header}>
          <h3>{title}</h3>
          {type !== "song" && <h4 className={styles.btnShowAll} onClick={handleToggle}>
            {!toggleForCarousel ? "Collapse All" : "Show all"}
          </h4>}
          
        </div>

        {
          showFilters && ( 
          <div className={styles.filterWrapper}>
              <Filters 
              filters={filters}
              selectedFilterIndex={selectedFilterIndex}
              setSelectedFilterIndex = {setSelectedFilterIndex}

              />


          </div>
        )
        }



        {data.length === 0 ? (
          <CircularProgress />
        ) : (
          <div className={styles.cardWrapper}>
            {!toggleForCarousel ? 
              <div className={styles.wrapper}>
              {cardsToRender.map((album) => (
              <Card key={album.id} data={album} type={type} />
                ))}
            </div> 
            : <Carousel data={cardsToRender} renderComponent={(data)=><Card data={data} type={type}/>} />}
          </div>
        )}
      </div>
      );
}
export default Section;
