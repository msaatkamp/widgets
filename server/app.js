const getInsights = require("./getInsights");
const getInsightDetails = require("./getInsightDetails");

const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.options("*", cors()); // include before other routes
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Perso-Candiadate... lost something on the server-side?");
});

app.get("/getinsights", (req, res) => {
  setTimeout(() => {
    res.send(JSON.stringify(getInsights));
  }, 3000);
});

app.get("/getinsightdetails/:insightId", (req, res) => {
  const insightId = req.params.insightId;
  const insightRes = getInsightDetails.filter((insight) => {
    return insightId == insight.id;
  })[0];
  setTimeout((params) => {
    res.send(JSON.stringify(insightRes));
  }, 3000);
});

app.post("/updaterating", (req, res) => {
  const insightId = req.body.insightId;
  const rating = req.body.rating;
  console.log(insightId, " rating has been updated to", rating);
  setTimeout((params) => {
    res.sendStatus(200);
  }, 500);
});

app.listen(port, () => {
  console.log(`perso-server app listening at http://localhost:${port}`);
});
