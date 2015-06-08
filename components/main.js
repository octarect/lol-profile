"use strict";
var React = require("react");
var Profile = require("./profile");
var MatchHistory = require("./match_history.js");

var Main = React.createClass({
  render: function() {
    return (
      <div className="container">
        <Profile summoner={this.props.summoner} />
        <MatchHistory games={this.props.history} champs={this.props.champs} />
      </div>
    );
  }
});

module.exports = Main;