"use strict";
var React = require("react");

var Navigation = React.createClass({displayName: "Navigation",
  render: function() {
    return (
      <nav className="navbar navbar-inverse">	
        <div className="navbar-header">
          <button className="navbar-toggle" data-toggle="collapse" data-target=".target">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="">{this.props.title}</a>
        </div>
        <div className="collapse navbar-collapse target">
          <ul className="nav navbar-nav">
            <li className="active"><a href="">Link1</a></li>
            <li><a href="">Link2</a></li>			
          </ul>
          
          <ul className="nav navbar-nav navbar-right">
            <li><a href="">Link3</a></li>
          </ul>
        </div>
      </nav>
    );
  }
});

module.exports = Navigation;