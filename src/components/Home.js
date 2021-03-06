import React, { useEffect, useState } from "react";
import { getStoryIds } from "../utils/apis";
import { Story } from "./Story";
import "../index.css";

const Home = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data));
  }, []);

  return storyIds.map((storyId, index) => (
    <>
      <div className="indPost">
        <p>{index + 1}</p>
        <Story key={storyId} storyId={storyId} />
      </div>
    </>
  ));
};

export default Home;
