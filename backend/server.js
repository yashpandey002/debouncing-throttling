const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get("/sum", (req, res) => {
    const { a, b } = req.query;
    const sum = Number(a) + Number(b);

    res.status(200).json({ sum });
});

app.listen(PORT, () => console.log(`App is running ${PORT}`));
