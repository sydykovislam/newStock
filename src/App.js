import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";

import classes from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Homepage from "./pages/Homepage/Homepage";
import PhotosGallery from "./pages/PhotosGallery/PhotosGallery";
import Articles from "./pages/Articles/Articles";
import FullArticle from "./components/FullArticle/FullArticle";
import axios from "./axios";
import AdminPanel from "./pages/AdminPanel/AdminPanel";
import ArticlesPanel from "./pages/AdminPanel/AticlesPanel/ArticlesPanel";
// import { ReactComponent as Logo } from "./assets/logo.svg";
// import { BrowserRouter as Router } from "react-router-dom";
// import Routes from "./Routes";

class App extends Component {
  state = {
    collapseID: "",
    articles: null
  };

  // componentDidUpdate() {
  //   this.setState({
  //     articles: null
  //   });
  // }
  componentDidMount() {
    console.log(this.state.articles);
    if (this.state.articles === null) {
      axios.get("articles.json").then(response => {
        this.setState({
          articles: response.data
        });
        this.props.loadData(response.data);
      });
    } else {
      console.log(this.state.articles);
    }
  }

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  closeCollapse = collapseID => () =>
    this.state.collapseID === collapseID && this.setState({ collapseID: "" });

  render() {
    return (
      <BrowserRouter>
        <div className={classes.App}>
          <Navbar />

          <Route path="/" exact component={Homepage} />
          <Route path="/articles" component={Articles} />
          <Route path="/ps-gallery" component={PhotosGallery} />
          <Route path="/full-article" component={FullArticle} />

          <Route path="/admin-panel" component={AdminPanel} />
          <Route path="/articles-panel" component={ArticlesPanel} />

          <Footer />
        </div>
      </BrowserRouter>
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
)(App);
