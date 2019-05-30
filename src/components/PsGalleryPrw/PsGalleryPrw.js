import React from "react";
// import What from './What/What';
import classes from "./PsGalleryPrw.module.css";

function PsGalleryPrw(props) {
  let styles = { backgroundImage: "url(" + props.bgImg + ")" };
  return (
    <div className={classes.PsGalleryPrw} style={styles}>
      <h1>{props.title}</h1>
    </div>
  );
}

export default PsGalleryPrw;
