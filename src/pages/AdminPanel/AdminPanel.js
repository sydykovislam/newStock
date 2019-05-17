import React, { Component } from "react";
// import What from "./components/What/What";
import classes from "./AdminPanel.module.css";
import AdminNav from "../../components/AdminNav/AdminNav";
import ArticlesPanel from "./AticlesPanel/ArticlesPanel";

class AdminPanel extends Component {
  render() {
    return (
      <div className={classes.AdminPanel}>
        <h1 className={classes.Welcome}>Admin Panel</h1>
        <AdminNav />
      </div>
    );
  }
}

export default AdminPanel;
