import React from "react";
// import What from './What/What';
import classes from "./Article.module.css";

function Article(props) {
  return (
    <div className={classes.Article}>
      <img src={props.preview} />
      <div>
        <h2>{props.title}</h2>

        <p>{props.content}</p>
      </div>
    </div>
  );
}

export default Article;
