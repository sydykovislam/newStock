import React from "react";
import { connect } from "react-redux";
// import What from './What/What';
// import from './FullArticle.css'

function FullArticle(props) {
  // console.log(props.flArt);
  return <div className="FullArticle">asdf</div>;
}

const mapStateToProps = state => {
  return {
    // this.props.ingredients: reducer.js/state.ingredients
    flArt: state.FullArticle
  };
};

export default connect(
  mapStateToProps,

  null
)(FullArticle);
