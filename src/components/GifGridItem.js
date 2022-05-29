import React from "react";

export const GifGridItem = ({ id, title, url }) => {
  //   console.log(props);
  return (
    <div className="animate__animated animate__bounce animate__fadeIn">
      <img src={url} alt={title} />
    </div>
  );
};
