"use strict";
var React = require("react");
var s_spell_icon_url = "http://ddragon.leagueoflegends.com/cdn/5.2.1/img/spell/{name}.png ";

var SummonerSpellIcon = React.createClass({
  displayName: "SummonerSpellIcon",
  render: function() {
    var spell = getSummonerSpellById(this.props.s_spells, this.props.s_spell_id);
    var escapedName = spell.key.replace(/\s+/g, "");
    var iconUrl = s_spell_icon_url.format({name: escapedName});
    return (
      <img src={iconUrl} className="spell-icon" title={spell.name}/>
    );
  }
});