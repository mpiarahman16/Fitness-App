var express = require ("express");
var mongoose = require ("mongoose");
var compression = require ("compression");


var app= express();
var PORT = process.env.PORT || 3000;

app.use (compression());

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://heroku_dc2xr282:ahe5ergjlkqpgqpuiffeukb4no@ds151662.mlab.com:51662/heroku_dc2xr282", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(PORT, function() {
  console.log(`Now listening on port: ${PORT}`);
});