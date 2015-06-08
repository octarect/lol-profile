var express      = require("express"),
    app          = express(),
    fs           = require("fs"),
    path         = require("path"),
    url          = require("url"),
    browserify   = require("browserify"),
    reactify     = require("reactify"),
    Handlebars   = require("handlebars"),
    React        = require("react")
;
// League of Legends API wrapper 
var api = require("./easy_lol_api");
api.init("6d449796-f2d9-4c14-9723-3747e577f800", "na");

// load react components
require("node-jsx").install({harmony: true});
var Main = require("./components/main");
var Navigation = require("./components/header");

app.get("/", function(req, res) {
  var template = Handlebars.compile(fs.readFileSync('./index.hbs').toString());
  var url_parts = url.parse(req.url, true);
  
  if ("name" in url_parts.query) {
    var s_name = url_parts.query.name.toLowerCase();
    var summoner = api.get("get_summoner", {name: s_name});
    console.log(summoner);
    var games = api.get("get_games", {id: summoner[s_name].id});
    console.log(games);
    res.send(template({
      header: React.renderToString(React.createElement(Navigation, {title: "LoLProfile.com"})),
      markup: React.renderToString(React.createElement(Main, {summoner: summoner[s_name], history: games})),
    }));
  } else {
    res.send("Error: Invalid request...");
  }
});

app.get(/^\/(?:css|lib)\/.+/, function(req, res) {
  var contentType, filePath = __dirname + req.url;
  if (path.extname(req.url) == ".css")
    contentType = "text/css";
  if (path.extname(req.url) == ".js")
    contentType = "application/javascript";

  fs.exists(filePath, function(exists) {
    if ( exists ) {
      fs.readFile(filePath, function(error, content) {
        if ( error ) {
          res.writeHead(500);
          res.end();
        } else {
          res.setHeader("content-type", contentType);
          res.end(content, 'utf-8');
        }
      });
    } else {
      res.writeHead(404);
      res.end();
    }
  });
});

app.get('/bundle.js', function(req, res) {
  res.setHeader('content-type', 'application/javascript');
  browserify('./browser')
    .transform({ harmony: true }, reactify)
    .bundle()
    .pipe(res)
  ;
});

// start listening 
var port = 8080;
console.log("listening on " + port);
app.listen(port);