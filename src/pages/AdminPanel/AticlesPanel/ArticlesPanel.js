import React, { Component } from "react";
// import What from './components/What/What';
import classes from "./ArticlesPanel.module.css";
import axios from "../../../axios";

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

  // let createFunc = (com) => {
  //   let newCom = event.target.value;

  //   newArticlePrw.{com} = newCom;

  // }
  setTitle = event => {
    let newCom = event.target.value;
    this.newArticlePrw.title = newCom;
    this.newArticle.title = newCom;
  };
  setContentPrw = event => {
    let newCom = event.target.value;
    this.newArticlePrw.content = newCom;
  };
  setContent = event => {
    let newCom = event.target.value;
    this.newArticle.content = newCom;
  };
  setUrl = event => {
    let newCom = event.target.value;
    this.newArticlePrw.preview = newCom;
    this.newArticle.preview = newCom;
  };

  addArticle = () => {
    let id = Math.random() * 10000;
    let newArtclPrw = { ...this.newArticlePrw };
    newArtclPrw.id = id.toFixed(0);

    let article = newArtclPrw;
    let fullArticle = { ...this.newArticle };

    axios.post("articles.json", article).then(response => {
      // name: "Article";
      alert("Success");
    });
    axios.post("full-articles.json", fullArticle).then(response => {
      console.log(response.headers);
      // name: "Article";
      // alert("Success");
    });
  };

  render() {
    return (
      <div className={classes.ArticlesPanel}>
        <h1>Add article</h1>
        <input
          onChange={this.setTitle}
          className={classes.Inputs}
          type="text"
          placeholder="Article`s title"
        />
        <input
          onChange={this.setUrl}
          className={classes.Inputs}
          type="text"
          placeholder="Picture`s url"
        />
        <input
          onChange={this.setContentPrw}
          className={classes.Inputs}
          type="text"
          placeholder="Preview content"
        />
        <input
          onChange={this.setContent}
          className={classes.Inputs}
          type="text"
          placeholder="Full content"
        />
        <button onClick={this.addArticle}>Add</button>
      </div>
    );
  }
}

export default ArticlesPanel;
