"use strict";
var React = require("react");
var champ_icon_url = "http://ddragon.leagueoflegends.com/cdn/5.2.1/img/champion/{name}.png";

var getChampById = function(champs, id) {
  var data = champs.data;
  for (var champ in data) {
    if (data[champ].id == id)
      return data[champ];
  }
  return null;
};

var ChampIcon = React.createClass({
  displayName: "ChampIcon",
  render: function() {
    var champ = getChampById(this.props.champs, this.props.champion_id);
    var escapedName = champ.name.replace(/\s+/g, "");
    var iconUrl = champ_icon_url.format({name:escapedName});
    return (
      <img src={iconUrl} className="champ-icon" title={champ.name} />
    );
  }
});


module.exports = ChampIcon;