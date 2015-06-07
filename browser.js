'use strict';
var React = require('react'),
    Main   = require('./components/main'),
    Navigation = require("./components/header")
;

//var data = JSON.parse(document.getElementById('initial-data').getAttribute('data-json'));
//React.render(React.createElement(Navigation, {title: "LoLProfile.com"}), document.getElementById("header"));
React.render(<Main />, document.getElementById("main"));