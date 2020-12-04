import React from "react";
import "../styles/Home.css";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import Search from "../components/Search";

export default function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className="home__body">
        <img
          src="https://1000logos.net/wp-content/uploads/2016/11/google-logo.png"
          alt=""
        />
        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
}
