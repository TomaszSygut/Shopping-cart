require("dotenv").config();
const express = require("express");
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/db");

const path = require("path");

// Step 1: 
app.use(express.static(path.resolve(__dirname, "/Users/mac-113/Desktop/Shopping-cartt/frontend/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "/Users/mac-113/Desktop/Shopping-cartt/frontend/build", "index.html"));
});

connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => { 
  res.json({ message: "API running..." });
});

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
 