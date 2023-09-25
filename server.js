const express = require("express");
const http = require("http");
const app = express();
const fs = require('fs');
let user;
fs.readFile('database/user.json', 'utf8', (err,data)=>{
  if(err){
    console.log('Error:', err);
  }else{
    user=JSON.parse(data)
  }
})

//1 Kirish code
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2 Sessions

//3 Views code
app.set("views", "views");
app.set("view engine", "ejs");

//4 Routing code
app.get('/',(req,res) => {
  res.render('harid.ejs');
})
  // res.json({test:"success"})
app.post('/create-form',(req,res) => {
  console.log(req.body);
  res.send(req.body);
})

app.get('/author', (req,res)=>{
  res.render('author', {user:user})
})

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, () => {
  console.log(`The server is running successfully on port: ${PORT}`);
});

