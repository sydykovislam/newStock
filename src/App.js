import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import classes from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Homepage from "./pages/Homepage/Homepage";
import PhotosGallery from "./pages/PhotosGallery/PhotosGallery";
import Articles from "./pages/Articles/Articles";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={classes.App}>
          <Navbar />

          <Route path="/" exact component={Homepage} />
          <Route path="/articles" component={Articles} />
          <Route path="/ps-gallery" component={PhotosGallery} />

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
