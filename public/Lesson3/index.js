// var fs = require('fs');
// var dummyText = "Apple yep";

// function main() {
//    fs.writeFileSync("dummytext.txt", dummyText);
//    var text = fs.readFileSync("dummytext.txt").toString();
//    console.log(dummyText == text);
//    console.log(text);
//    fs.writeFileSync("undummytext.txt",
//        text.replace("Apple", "Microsoft")
//    );
// }
var fs = require('fs');

function main() {
    fs.writeFileSync("obj.json", JSON.stringify(obj));
}

var obj = {
    "first_name": "Susanna",
    "last_name": "Beglaryan",
    "age": 20,
    "tumo_student": true
}

main();