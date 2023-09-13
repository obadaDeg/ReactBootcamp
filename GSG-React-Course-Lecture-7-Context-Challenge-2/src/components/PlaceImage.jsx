import React, { useContext } from "react";
import { getImageUrl } from "./Utils";
import { MyContext } from "./MyContext";
const PlaceImage = ({ place}) => {
  
  const myContext = useContext(MyContext);
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={myContext.imageSize}
      height={myContext.imageSize}
    />
  );
};

export default PlaceImage;
