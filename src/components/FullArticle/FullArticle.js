import React from "react";
import { connect } from "react-redux";
// import What from './What/What';
import classes from "./FullArticle.module.css";

function FullArticle(props) {
  // console.log(props.flArt);
  return (
    <div className={classes.FullArticle}>
      <h1 className={classes.Title}>{props.flArt.title}</h1>
      <img src={props.flArt.preview} />
      <div className={classes.text}>
        <p>{props.flArt.content}</p>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    // this.props.ingredients: reducer.js/state.ingredients
    flArt: state.fullArticle
  };
};

export default connect(
  mapStateToProps,

  null
)(FullArticle);
