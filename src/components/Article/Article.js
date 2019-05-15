import React, { Component } from "react";
// import What from './What/What';
import classes from "./Article.module.css";
import axios from "../../axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Article extends Component {
  openArticle = () => {
    axios.get(`full-articles/${this.props.id}.json`).then(response => {
      this.props.loadFullArticle(response.data);
    });
  };
  render(props) {
    return (
      <div className={classes.Article}>
        <img src={this.props.preview} />
        <div>
          <h2 onClick={this.openArticle}>
            <Link to="/full-article">{this.props.title}</Link>
          </h2>

          <p>{this.props.content}</p>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadFullArticle: content => dispatch({ type: "LOAD_FULL_ARTICLE", content })
  };
};

// const mapStateToProps = state => {
//   return {
//     // this.props.ingredients: reducer.js/state.ingredients
//     articles: state.articles
//   };
// };

export default connect(
  null,
  mapDispatchToProps
)(Article);
