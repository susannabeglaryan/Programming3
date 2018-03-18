// function main() {
    var socket = io.connect('http://localhost:3000');
    
    function setup() {
        createCanvas(700, 700);
        background("#acacac");
        frameRate(15);
    }
    
    function mouseDragged() {
        console.log(mouseX, mouseY);

        var data = {
            x: mouseX,
            y: mouseY
        };

        fill("blue");
        ellipse(mouseX, mouseY, 25, 25);
    }
// }

// window.onload = main();

// function main() {
//     var socket = io.connect('http://localhost:3000');
//     var chatDiv = document.getElementById('chat');
//     var input = document.getElementById('message');
//     var button = document.getElementById('submit');
 
//     function handleSubmit(evt) {
//         var val = input.value;
//         if (val != "") {
//             socket.emit("send message", val);
//         }
//     }
//     button.onclick = handleSubmit;
 
    
//     function handleMessage(msg) {
//         var p = document.createElement('p');
//         p.innerText = msg;
//         chatDiv.appendChild(p);
//         input.value = "";
// }

// socket.on('display message', handleMessage);
// } 

// window.onload = main;
