"use strict";
var React = require("react");

var Profile = React.createClass({
  displayName: "Profile",
  render: function() {
    var summoner = this.props.summoner;
    var iconUrl = "http://ddragon.leagueoflegends.com/cdn/5.2.1/img/profileicon/" + summoner.profileIconId.toString() + ".png";
    return (
      <div id="profile">
        <div>
          <img src={iconUrl} />
        </div>
        <div>
          <h1 className="summoner-name">{summoner.name} <span className="summoner-id">(id:{summoner.id})</span></h1>
          <h3 className="summoner-level">Summoner-Level: {summoner.summonerLevel}</h3>
        </div>
        <div className="profile-footer"></div>
      </div>
    );
  }
});

module.exports = Profile;