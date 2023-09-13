
import { useState } from "react";
import List from "./components/List";
import {MyContext} from "./components/MyContext"
import { places } from "./components/Data";

export default function App() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;

  

  let handleImageSize = (e) => {
            setIsLarge(e.target.checked);
          }
  return (
    <>
      <label>
        <input type="checkbox" checked={isLarge} onChange={handleImageSize} />
        Use large images
      </label>
      <hr />
      <MyContext.Provider value={{imageSize: imageSize, place: places}}>
        <List/>
      </MyContext.Provider>
    </>
  );
}
