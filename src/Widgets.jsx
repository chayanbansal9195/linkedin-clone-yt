import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets_article">
      <div className="widgets_articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("PAPA React is back", "Top news - 9999 readers")}
      {newsArticle("Coronovirus", "Top news - 886 readers")}
      {newsArticle("PAPA React is back", "Top news - 9999 readers")}
      {newsArticle("Coronovirus", "Top news - 886 readers")}
      {newsArticle("PAPA React is back", "Top news - 9999 readers")}
      {newsArticle("Coronovirus", "Top news - 886 readers")}
    </div>
  );
}

export default Widgets;
