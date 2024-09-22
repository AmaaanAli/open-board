const express = require("express"); //Access
const socket = require("socket.io");

const app = express(); //Initialize and server is ready to listen

app.use(express.static("public"));

port = 5000;
let server = app.listen(port, () => {
    console.log("listening to port" + port);
});

let io = socket(server);

io.on("connection", (socket) => {
    console.log("Made scoket connection");

    // Received Data
    socket.on("beginPath", (data) => {
        // data -> data from frontend
        // Now transfer data to all connected computers
        io.sockets.emit("beginPath", data);
    });

    socket.on("drawStroke", (data) => {
    io.sockets.emit("drawStroke", data);
    });

    socket.on("redoUndo", (data) => {
        io.sockets.emit("redoUndo", data);
    });
});
