
const express = require("express");

const app = express();
const PORT = 3000;

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to the Home Page");
});

// About route
app.get("/about", (req, res) => {
    res.send("This is the About Page");
});

// Services route
app.get("/services", (req, res) => {
    res.send("Our Services: Web Development and Design");
});

// Contact route
app.get("/contact", (req, res) => {
    res.send("Contact us at contact@example.com");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
