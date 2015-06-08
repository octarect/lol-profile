"use_strict";
var request = require("sync-request");
require("./format");

var api = {
  api_key: "",
  region: "na",
  api_root0: "",
  api_root1: "",
  api_ver: {
    champion: "v1.2",
    current_game: "v1.0",
    featured_games: "v1.0",
    game: "v1.3",
    league: "v2.5",
    lol_static_data: "v1.2",
    lol_status: "v1.0",
    match: "v2.2",
    matchhistory: "v2.2",
    stats: "v1.3",
    summoner: "v1.4",
    team: "v2.4",
  },
  init: function(api_key, region) {
    this.api_key = api_key;
    this.region = region;
    this.api_root0 = "https://{reg}.api.pvp.net/api/lol/{reg}/".format({reg: this.region});
    this.api_root1 = "https://{reg}.api.pvp.net/api/lol/static-data/{reg}/".format({reg: this.region});
  },
  sendRequest: function(url) {
    var res = request("GET", url);
    return JSON.parse(res.getBody());
  },
  get: function(command, data) {
    var api_main;
    // summoner API
    if (command == "get_summoner") {
      if ("id" in data) {
        api_main = this.api_ver.summoner + this.get_summoner_by_id.format({id: data.id});
        return this.sendRequest(this.api_root0 + api_main + "?api_key=" + this.api_key);
      } 
      if ("name" in data) {
        api_main = this.api_ver.summoner + this.get_summoner_by_name.format({name: data.name});
        return this.sendRequest(this.api_root0 + api_main + "?api_key=" + this.api_key);
      }
    }
    
    if (command == "get_games") {
      if ("id" in data) {
        api_main = this.api_ver.game + this.get_games.format({id: data.id});
        return this.sendRequest(this.api_root0 + api_main + "?api_key=" + this.api_key);
      }
    }
    
    if (command == "get_static_data") {
      if (data.target == "champs") {
        if ("type" in data) {
          api_main = this.api_ver.lol_static_data + this.static_data_champs.format({type: data.type});
          return this.sendRequest(this.api_root1 + api_main + "&api_key=" + this.api_key);
        }
      }
      if (data.target == "s_spells") {
        if ("type" in data) {
          api_main = this.api_ver.lol_static_data + this.static_data_s_spells.format({type: data.type});
          return this.sendRequest(this.api_root1 + api_main + "&api_key=" + this.api_key);
        }
      }
    }
    
    return null;
  },
  get_summoner_by_name: "/summoner/by-name/{name}",
  get_summoner_by_id: "/summoner/{id}",
  get_games: "/game/by-summoner/{id}/recent",
  static_data_champs: "/champion?champData={type}",
  static_data_s_spells: "/summoner-spell?spellData={type}",
};

module.exports = api;