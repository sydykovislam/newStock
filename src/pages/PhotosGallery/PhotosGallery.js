import React, { Component } from "react";
// import What from './components/What/What';
import classes from "./PhotosGallery.module.css";
import axios from "../../axios";
import { connect } from "react-redux";
import PsGalleryPrw from "../../components/PsGalleryPrw/PsGalleryPrw";

class PhotoGallery extends Component {
  state = {
    galleries: null
  };

  componentDidMount() {
    axios.get("psGalleries.json").then(response => {
      this.setState({
        galleries: response.data
      });
      this.props.loadGalleriesList(response.data);
    });
  }
  render() {
    let galleriesList = this.props.galleries.map(galleries => (
      <PsGalleryPrw key={galleries.id} {...galleries} gallery={galleries} />
    ));
    return (
      <div className={classes.PhotosGallery}>
        <h1>PS Galleries</h1>
        <div className={classes.galleriesList}>{galleriesList}</div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadGalleriesList: data => dispatch({ type: "LOAD_GALLERIES", data })
  };
};

const mapStateToProps = state => {
  return {
    // this.props.ingredients: reducer.js/state.ingredients
    galleries: state.galleries
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(PhotoGallery);
