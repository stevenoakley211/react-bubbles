import React, { useState, useEffect } from "react";
import {axiosWithAuth} from './axiosWithAuth';
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const[update, setUpdate]= useState(false)
  useEffect( () => {
    axiosWithAuth()
      .get('/colors')
      .then(res => setColorList(res.data))
      .catch(err => console.log(err.response));
  },[update]
)

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} 
      update={update}setUpdate={setUpdate} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
