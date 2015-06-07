"use strict";
var React = require("react");
var Profile = require("./profile");

var Main = React.createClass({
  render: function() {
    return (
      <div className="container">
        <Profile summoner={this.props.summoner} />
      </div>
    );
  }
});

module.exports = Main;