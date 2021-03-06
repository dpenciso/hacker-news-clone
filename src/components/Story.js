import React, { useEffect, useState } from "react";
import { getStory } from "../utils/apis";
import "../index.css";
import splittedUrl from "splitted-url";

export const Story = ({ storyId }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then((data) => data && data.url && setStory(data));
  }, []);

  return story && story.url ? (
    <div className="story">
      <div className="heading">
        <a href={story.url}>{story.title}</a>
        <p className="shortUrl">({splittedUrl(story.url).domain})</p>
      </div>
      <p className="score">
        {story.score} points by {story.by}
      </p>
    </div>
  ) : (
    ""
  );
};
