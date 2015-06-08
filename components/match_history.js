var React = require("react");

var Row = React.createClass({
  displayName: "Row",
  render: function() {
    return (
      <tr>
        <td></td>
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
      return React.createElement(Row, {game:game});
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