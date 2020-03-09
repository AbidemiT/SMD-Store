const express = require("express");
const app = express();
// const fileUpload = require("express-fileupload");
const port = process.env.PORT || 4000;
const connectDB = require("../Config/db");
connectDB();

// app.use(fileUpload);
app.use(express.json({extended: false}));

app.get("/", (req,res) => {
    res.json({name: "Tiamiyu Sikiru Abidemi"})
});

// Create Route
app.use("/api/user", require("./routes/user"));
app.use("/api/products", require("./routes/products"));
app.use("/api/product", require("./routes/product"));
app.use("/api/product/image", require("./routes/productImage"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/brands", require("./routes/brands"));



app.listen(port, () => {
    console.log(`Server active on port ${port}...`);
});