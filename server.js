const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.port || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extends: true }));

app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: 1,
      image: "https://placeimg.com/64/64/1",
      name: "나성민",
      birthday: "990201",
      gender: "남자",
      job: "대학생",
    },
    {
      id: 2,
      image: "https://placeimg.com/64/64/2",
      name: "아이유",
      birthday: "901208",
      gender: "여자",
      job: "가수",
    },
    {
      id: 3,
      image: "https://placeimg.com/64/64/3",
      name: "황정민",
      birthday: "690219",
      gender: "남자",
      job: "배우",
    },
  ]);
});

app.listen(port, console.log(`Listening on port ${port}`));
