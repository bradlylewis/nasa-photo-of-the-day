import React from "react";

export default function Media({ url }) {
  return  <div className="video-responsive">
    <iframe
      className='media-of-day'
      src={url}
      allow="muted; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
};

