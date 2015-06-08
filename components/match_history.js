"use strict";
var React = require("react");
var ChampIcon = require("./champ_icon");

var Row = React.createClass({
  displayName: "Row",
  render: function() {
    var game = this.props.game;
    return (
      <tr>
        <td><ChampIcon champion_id={game.championId} /></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    );
  }
});

var MatchHistory = React.createClass({
  displayName: "MatchHistory",
  render: function() {
    var Rows = this.props.games.games.map((game) => {
      return React.createElement(Row, {game:game, champs:this.props.champs});
    });
    return (
      <div id="matchHistory">
        <h2>Recent games</h2>
        <table className="table table-bordered table-condensed">
          <thead>
            <tr>
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