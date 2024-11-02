// External libraries
const express = require("express")
const cors = require("cors");
const morgan = require("morgan");

// Own modules
const authRoutes = require("./router/auth.js");

// Invoke an express object;
const app = express();

// Apply middleware used across the app
app.use(express.json());
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
    credentials: true,
}
app.use(cors(corsOptions));
app.use(morgan("dev"));

// Routes
app.use("/api/auth", authRoutes);

// Landing page
app.get("/", (req, res) => {
    res.send('Hello from homepage');
});


// Set port and start app.
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

module.exports = app;