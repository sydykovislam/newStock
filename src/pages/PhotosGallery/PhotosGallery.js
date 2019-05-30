import React, { Component } from "react";
// import What from './components/What/What';
import classes from "./PhotosGallery.module.css";
import axios from "../../axios";

class PhotoGallery extends Component {
  state = {
    galleries: null
  };

  componentDidMount() {
    axios.get("psGalleries.json").then(response => {
      this.setState({
        articles: response.data
      });
      this.props.loadData(response.data);
    });
  }
  render() {
    return (
      <div className={classes.PhotosGallery}>
        <h1>PS Galleries</h1>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadData: data => dispatch({ type: "LOAD_DATA", data })
  };
};

const mapStateToProps = state => {
  return {
    // this.props.ingredients: reducer.js/state.ingredients
    articles: state.articles
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(PhotoGallery);
