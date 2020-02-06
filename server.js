const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const connectDB = require("./Config/db");
connectDB();

app.get("/", (req,res) => {
    res.json({name: "Tiamiyu Sikiru Abidemi"})
});

app.use(express.json({extended: false}));

// Create Route
app.use("/api/user", require("./routes/user"));
app.use("/api/products", require("./routes/products"));
app.use("/api/auth", require("./routes/auth"));



app.listen(port, () => {
    console.log(`Server active on port ${port}...`);
});