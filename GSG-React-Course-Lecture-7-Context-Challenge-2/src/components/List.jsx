import React, { useContext } from "react";
import Place from "./Place";
import { MyContext } from "./MyContext";

const List = ({ imageSize }) => {
  const myContext = useContext(MyContext)
  const listItems = myContext.place.map((place) => (
    <li key={place.id}>
      <Place place={place}/>
    </li>    
  ));
  return <ul>{listItems}</ul>;
};  
export default List;



