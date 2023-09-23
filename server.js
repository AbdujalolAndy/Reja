const express = require("express");
const http = require("http");
const app = express();

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

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, () => {
  console.log(`The server is running successfully on port: ${PORT}`);
});

