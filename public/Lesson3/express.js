var express = require("express");
var app = express();

app.use(express.static("Lesson2"));

app.get("/", function(req, res) {
    res.redirect("/Lesson2/index.html");
});

// app.get("/", function(req, res) {
//     res.send("<h1>Hello world<h1>");
// });

// app.get("/name/:name", function(req, res) {
//     var name = req.params.name;
//     res.send("<h1>Hello " + name + "</h1>");
// });

// app.get("/google", function(req,res) {
//     res.redirect('http://google.com');
// });

// app.get("/search/:value", function(req,res) {
//     var searchValue = req.params.value;
//     res.redirect('http://google.com/search?q=' + searchValue);
// });

// app.get("/*", function(req, res) {
//     res.send("<h1>Error 404</h1>");
// });

app.listen(3000, function() {
    console.log("Example is running on port 3000");
});

//************************/
// var fs = require('fs');


// function main() {
//     if(frameCount % 60 == 0)
//     fs.writeFileSync("statistics.json", JSON.stringify(statistics));
// }

// var statistics = {
//     "Խոտեռի քանակ": grassCount,
//     "last_name": "Beglaryan",
//     "age": 20,
//     "tumo_student": true
// }

// main();