"use strict";
require("date-utils");
var React = require("react");
var ChampIcon = require("./champ_icon");
var S_SpellIcon = require("./s_spell_icon");

var Row = React.createClass({
  displayName: "Row",
  render: function() {
    var game = this.props.game;
    var result = game.stats.win ? "Win" : "Defeat";
    var rowClass = game.stats.win ? "info" : "danger";
    var kill = game.stats.championsKilled;
    var death = game.stats.numDeaths;
    var assist = game.stats.assists;
    
    kill = kill !== undefined ? kill : 0;
    death = death !== undefined ? death : 0;
    assist = assist !== undefined ? assist : 0;
    
    var date = new Date(game.createDate).toFormat("YYYY/MM/DD HH24:MI:SS");
    
    return (
      <tr className={rowClass}>
        <td>{date}</td>
        <td><ChampIcon champion_id={game.championId} champs={this.props.champs} /></td>
        <td>{result}</td>
        <td>{game.gameMode}</td>
        <td>{game.gameType}</td>
        <td>{game.subType}</td>
        <td>{kill}/{death}/{assist}</td>
        <td>
          <S_SpellIcon s_spells={this.props.s_spells} s_spell_id={game.spell1} />
          <S_SpellIcon s_spells={this.props.s_spells} s_spell_id={game.spell2} />
        </td>
      </tr>
    );
  }
});

var MatchHistory = React.createClass({
  displayName: "MatchHistory",
  render: function() {
    var Rows = this.props.games.games.map((game) => {
      return React.createElement(Row, {game:game, champs:this.props.champs, s_spells:this.props.s_spells});
    });
    return (
      <div id="matchHistory">
        <h2>Recent games</h2>
        <table className="table table-bordered table-condensed">
          <thead>
            <tr>
              <th>Date</th>
              <th>champ</th>
              <th>result</th>
              <th>game-mode</th>
              <th>game-type</th>
              <th>sub-type</th>
              <th>kill/death/assist</th>
              <th>summoner-spell</th>
            </tr>
          </thead>
          <tbody>
            {Rows}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = MatchHistory;