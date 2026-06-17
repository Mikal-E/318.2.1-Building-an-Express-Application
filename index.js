import express from "express";

// Part 2 - Installed Morgan Middleware To Log Every Request

import morgan from "morgan";

import path from "path";

const app = express();
const port = 3000

app.set("view engine", "ejs");

// Part 3 - Use Express Static Middleware To Open Up The Assets Folder For Image

app.use(express.static("assets"));

// Part 2 - app.use for Morgan Middleware 

app.use(morgan("dev"));

// Routes - Send a simple "success" response

app.post("/submit", (req, res) => {

    console.log(req.body);

    res.send("Success!");

})

// Create at least two different view templates for your chosen view engine

app.get('/', (req, res) => { res.render('home', { title: 'App', message: 'Welcome!' }); });
app.get('/about', (req, res) => { res.render('about', { title: 'App', message: 'Welcome!' }); });

// Image Download Route.

// const path = require("path");

app.get("/download-image", (req, res) => {

  const knicksImage = path.join(import.meta.dirname, "assets", "images", "2026-nba-champions-knicks.png");

  res.download(knicksImage, "2026-nba-champions-knicks.png", (err) => {

    if (err) {

      console.error("Download failed:", err);

      if (!res.headersSent) {

        res.status(500).send("Could not download the file.")
        
      }
    }
  })
})

// Within your routes, include at least one instance of a route parameter that modifies what is rendered to the client.

app.get("/:name", (req, res) => { res.render("about") });



// Tell server which port to listen on
app.listen(port, () => {

  console.log(`Server is running on port ${port}`);

});



