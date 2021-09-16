const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());


app.get('/data', (req, res) => {
    return res.json({
      someSecretData: 'Shhhh!',
    });
  });

app.listen(3010, () => console.log('App listening on port 3010'));