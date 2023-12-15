import React from "react";
import PropTypes from "prop-types";

export default function Image({src, caption}) {
  return <div className="">
    <img  src={src} caption={caption} />
  </div>;
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};
