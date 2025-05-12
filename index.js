console.log("ciao");

const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  console.log("Richiesta arrivata New");

  res.send("Server del mio blog");
});

app.get("/bacheca", (req, res) => {
  const posts = [
    {
      title: "title-1",
      text: "description",
      img: "/images/ciambellone.jpeg",
      tags: ["tag-1", "tag-2", "tag-3", "tag-4", "tag-5"],
    },
    {
      title: "title-2",
      text: "description",
      img: "/images/cracker_barbabietola.jpeg",
      tags: ["tag-1", "tag-2", "tag-3", "tag-4", "tag-5"],
    },
    {
      title: "title-3",
      text: "description",
      img: "/images/pane_fritto_dolce.jpeg",
      tags: ["tag-1", "tag-2", "tag-3", "tag-4", "tag-5"],
    },
    {
      title: "title-4",
      text: "description",
      img: "/images/pasta_barbabietola.jpeg",
      tags: ["tag-1", "tag-2", "tag-3", "tag-4", "tag-5"],
    },
    {
      title: "title-",
      text: "description",
      img: "/images/torta_paesana.jpeg",
      tags: ["tag-1", "tag-2", "tag-3", "tag-4", "tag-5"],
    },
  ];

  res.json(posts);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
