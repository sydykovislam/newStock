import React, { Component } from "react";
// import What from './What/What';
import classes from "./Article.module.css";
import axios from "../../axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Article extends Component {
  render(props) {
    let openArticle = id => {
      axios.get(`full-articles/${id}.json`).then(response => {
        this.props.loadFullArticle(response.data);
      });
    };
    return (
      <div className={classes.Article}>
        <img src={this.props.preview} />
        <div>
          <h2>
            <Link to="/full-article" onClick={openArticle(this.props.id)}>
              {this.props.title}
            </Link>
          </h2>

          <p>{this.props.content}</p>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadFullArticle: data => dispatch({ type: "LOAD_FULL_ARTICLE", data })
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
