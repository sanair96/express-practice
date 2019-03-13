//Initialisation
const app = require("express")();

//Route definition
app.get('/',(req,res)=>{
  res.send("Hello World");
});

//Starting Server
app.listen('3000',()=>{
  console.log("Listening on port 3000");
});