var express=require("express");
var app=express();

var http=require("http").createServer(app);

var io=require("socket.io")(http);

app.set("view engine", "ejs");

//Criar o evento Connection
//socket é o cliente - uma instância por cada cliente
io.on("connection",(socket) => {
    console.log(socket);
    console.log(socket.id);
});

app.get("/",(req,res) => {
    res.render("index");
});

http.listen(3000, () => {
    console.log("Servidor a ser executado!");
});
