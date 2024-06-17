import React from "react";

import Tab from "@mui/material/Tab";
import TabContext from '@mui/lab/TabContext';
import TabPanel from "@mui/lab/TabPanel";

import TabList from '@mui/lab/TabList';

import styles from './Filters.module.css';
export default function Filters({
  filters,
  selectedFilterIndex,
  setSelectedFilterIndex,
}) {
  const handleChange = (event, newValue) => {
    setSelectedFilterIndex(newValue);
  };

  return (
    <div>
    <TabContext value={selectedFilterIndex}>

      <TabList 
      onChange={handleChange}
        aria-label="lab API tabs example"
        TabIndicatorProps={{
          style: { backgroundColor: "var(--color-primary)" },
        }}
      >
        {filters.map((ele, index) => (
          <Tab key={index} className={styles.tab} label={ele.label}  />
        ))}
      </TabList>
      {filters.map((ele, index) => (
        <TabPanel key={index} value={ele.label} index={index}/>
      ))}
      </TabContext>
    </div>
  );
}
