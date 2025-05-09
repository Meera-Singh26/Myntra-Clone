const express = require("express");
const path = require("path");
const app = express();
const Port= 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));


});

app.get('/api/products', (req, res) => {
    res.json({message: "This is where product data would be returned."
        
    });


});

app.listen(Port,()=> {
    console.log(`Server running at http://localhost:${PORT}`);

});