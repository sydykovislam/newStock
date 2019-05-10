import React from "react";
// import What from './What/What';
import classes from "./Article.module.css";

function Article(props) {
  return (
    <div className={classes.Article}>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
}

export default Article;
