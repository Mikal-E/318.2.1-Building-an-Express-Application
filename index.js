import express from "express";

// Part 2 - Installed Morgan Middleware To Log Every Request

import morgan from "morgan";

const app = express();
const port = 3000

// Setting view engine

app.set("view engine", "ejs");

// Send a simple "success" response

app.post("/submit", (req, res) => {

    console.log(req.body);

    res.send("Success!");

})

// Part 2 - app.use for Morgan Middleware 

app.use(morgan("dev"));

// Create at least two different view templates for your chosen view engine

app.get('/', (req, res) => { res.render('home', { title: 'App', message: 'Welcome!' }); });
app.get('/about', (req, res) => { res.render('about', { title: 'App', message: 'Welcome!' }); });

// Within your routes, include at least one instance of a route parameter that modifies what is rendered to the client.

app.get("/:name", (req, res) => { res.render("about") });

// Tell server which port to listen on
app.listen(port, () => {

  console.log(`Server is running on port ${port}`);

});

