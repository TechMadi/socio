const express = require("express");
const app = express();

app.use(express.static("./dist/socio-board"));

app.get("/*", function (req, res) {
  res.sendFile("index.html", { root: "dist/socio-board/" });
});

app.listen(process.env.PORT || 8080);
