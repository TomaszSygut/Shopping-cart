require("dotenv").config();
const express = require("express");
const app = express();
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/db");




const path = require("path");


if(process.env.NODE_ENV === 'production') { 
app.use(express.static('../client/build'));

app.get('*', (req,res) => {
res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});
} 
 
 
  
connectDB();
 
app.use(express.json());
 
app.get("/", (req, res) => { 
  res.json({ message: "API running..." });
});

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
 