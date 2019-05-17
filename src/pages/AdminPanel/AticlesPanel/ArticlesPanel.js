import React, { Component } from "react";
// import What from './components/What/What';
import classes from "./ArticlesPanel.module.css";

class ArticlesPanel extends Component {
  newArticlePrw = {
    title: "title",
    content: "Content",
    preview: "url",
    id: 0
  };

  newArticle = {
    title: "title",
    content: "Content",
    preview: "url"
  };

  setTitle = () => {};
  setContent = () => {};
  setContent = () => {};
  render() {
    // let createFunc = (com) => {
    //   let newCom = event.target.value;

    //   newArticlePrw. = newCom;

    // }
    return (
      <div className={classes.ArticlesPanel}>
        <h1>Add article</h1>
        <input
          className={classes.Inputs}
          type="text"
          placeholder="Article`s title"
        />
        <input
          className={classes.Inputs}
          type="text"
          placeholder="Picture`s url"
        />
        <input
          className={classes.Inputs}
          type="text"
          placeholder="Preview text"
        />
        <input className={classes.Inputs} type="text" placeholder="Full text" />
        <button>Add</button>
      </div>
    );
  }
}

export default ArticlesPanel;
