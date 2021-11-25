import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4E16AQFCHMMKDkfZKg/profile-displaybackgroundimage-shrink_350_1400/0/1627407504436?e=1642636800&v=beta&t=ijWdKIAkt7-xE3PKWAak1rvBOVKXZtsPaOHVP8w1Tzw"
          alt=""
        />
        <Avatar className="sidebar_avatar" />
        <h2>Chayan Bansal</h2>
        <h4>chayan@gmail.com</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">2,543</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on post</p>
          <p className="sidebar_statNumber">2,468</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("react")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
      
    </div>
    
  );
}

export default Sidebar;
