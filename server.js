const express = require('express');
const http = require("http");
const app = express();

//1 Kirish code
app.use(express.static('publuc'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//2 Sessions
//3 Views code
app.set("views", "views");
app.set('view engine', 'ejs');

//4 Routing code
app.get('/hello', (req,res)=>{
    res.end(`<h1>Hello World by Abdujalol</h1>`);
});

app.get('/gif', (req,res)=>{
    res.end("<h1>Siz sovg\'alar bo\'limidasz</h1>");
})

const server  = http.createServer(app);
let PORT = 3000;
server.listen(PORT, ()=>{
    console.log(`The server is running successfully on port ${PORT}`)
});
