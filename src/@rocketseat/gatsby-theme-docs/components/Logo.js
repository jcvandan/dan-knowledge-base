import React from 'react';

export default function Logo(props) {
  const imgStyle = {
    width: "40px"
  };

  return (
    <h2>
      <img src="/document.png" style={imgStyle} />
      Dan's Docs
    </h2>
  );
}