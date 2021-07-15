import React from "react";
import styled from "styled-components"

const StyledMedia = styled.div`
width: auto;
img{
  width: 50%;
}
`

export default function Media({ url , mediaType}) {

  const isVideo = () => {
    console.log({mediaType})
    return (
      <StyledMedia className="video-container">
        <iframe
          className='media-of-day'
          src={url}
          allow="muted; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </StyledMedia>
    )
  };

  const isImage = () => {
    console.log({mediaType})
    return (
      <StyledMedia className="img-responsive">
        <img src={url} alt="boohoo"/>
      </StyledMedia>
    )
  };


  return mediaType === 'image' ? isImage() : mediaType === 'video' ? isVideo() : <h1>Boiiiiii</h1>
}