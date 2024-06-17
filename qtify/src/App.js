import React, { useEffect, useState } from 'react';
import Navbar from './component/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import {getNewAlbums, getTopAlbums} from './api/api'
import { StyledEngineProvider } from '@mui/material';

function App() {
  const [data, setData] = useState({});

  const generateData = (key, func)=> {
    func().then(data => {
      setData(prevState => {
        return {...prevState,[key]:data}
      });
    });
  };

  useEffect(()=>{
    generateData("topAlbums", getTopAlbums);
    generateData("newAlbums", getNewAlbums);
  },[]);

  const {topAlbums = [], newAlbums=[]} = data;

  return (
    <>
    <StyledEngineProvider >
    <Navbar />
    <Outlet context={{data:{topAlbums, newAlbums}}} />
    </StyledEngineProvider>
    </>
  );
}

export default App;
