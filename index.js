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
      text: "Simbolo di fierezza è nobiltà",
      img: "/images/lupo.jpg",
      tags: ["animale", "leader", "fierezza", "nobiltà", "orgoglio"],
    },
    {
      title: "title-2",
      text: "Strumento per poter imparare gratuitamente",
      img: "/images/youtube.jpg",
      tags: ["tutorial", "gratis", "imparare", "migliorare", "formazione"],
    },
    {
      title: "title-3",
      text: "Passione Manga ed Anime",
      img: "/images/escanor.jpg",
      tags: ["manga", "anime", "svago", "passatempo", "fantasticare"],
    },
    {
      title: "title-4",
      text: "Danza Latino Americano",
      img: "/images/bachata.jpg",
      tags: ["danza", "musica", "energia", "piacere", "divertimento"],
    },
    {
      title: "title-",
      text: "Squadra del cuore",
      img: "/images/ac-milan-logo.jpg",
      tags: ["calcio", "rossonero", "il diavolo", "milano", "champions league"],
    },
  ];

  res.json(posts);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
