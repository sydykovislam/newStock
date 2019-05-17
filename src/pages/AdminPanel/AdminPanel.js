import React, { Component } from "react";
// import What from "./components/What/What";
import classes from "./AdminPanel.module.css";
import { BrowserRouter, Route } from "react-router-dom";
import AdminNav from "../../components/AdminNav/AdminNav";
import ArticlesPanel from "./AticlesPanel/ArticlesPanel";

class AdminPanel extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={classes.AdminPanel}>
          <h1 className={classes.Welcome}>Admin Panel</h1>
          <AdminNav />
        </div>
      </BrowserRouter>
    );
  }
}

export default AdminPanel;
