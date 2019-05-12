import React from "react";
// import What from './What/What';
import Article from "../../components/Article/Article";
import classes from "./Articles.module.css";
import { connect } from "react-redux";

function Articles(props) {
  let articlesList = props.articles.map(article => (
    <Article key={article.id} {...article} />
  ));

  return (
    <div className={classes.Articles}>
      <h1 className={classes.Title}>Articles:</h1>
      {articlesList}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    // this.props.ingredients: reducer.js/state.ingredients
    articles: state.articles
  };
};

export default connect(
  mapStateToProps,
  null
)(Articles);
