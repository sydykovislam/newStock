import React, { Component } from "react";
import Article from "../../components/Article/Article";
import classes from "./Articles.module.css";
import { connect } from "react-redux";

class Articles extends Component {
  componentWillMount() {
    this.props.cleanArticle({});
  }
  render() {
    let articlesList = this.props.articles.map(article => (
      <Article key={article.id} {...article} article={article} />
    ));
    return (
      <div className={classes.Articles}>
        <h1 className={classes.Title}>Articles:</h1>
        {articlesList}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    articles: state.articles
  };
};

const mapDispatchToProps = dispatch => {
  return {
    cleanArticle: clear => dispatch({ type: "CLEAN_ARTICLE", clear })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(Articles);

// import React from "react";
// // import What from './What/What';
// import Article from "../../components/Article/Article";
// import classes from "./Articles.module.css";
// import { connect } from "react-redux";

// function Articles(props) {
//   let articlesList = props.articles.map(article => (
//     <Article key={article.id} {...article} />
//   ));

//   return (
//     <div className={classes.Articles}>
//       <h1 className={classes.Title}>Articles:</h1>
//       {articlesList}
//     </div>
//   );
// }

// const mapStateToProps = state => {
//   return {
//     // this.props.ingredients: reducer.js/state.ingredients
//     articles: state.articles
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     cleanArticle: data => dispatch({ type: "CLEAN_ARTICLE", data })
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
//   null
// )(Articles);
