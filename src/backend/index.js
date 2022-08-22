import express, { json } from 'express';
const app = express();
const sequelize=require("sequelize")

app.use(json());

const postgres_connection_string ="postgres://postgres:postgrespassword@postgres:5432/postgres";
const server = app.listen(800,() => {
   console.log("server listening on post 800");
});

app.post ("/foods_trigger_event",async,(req,res) => {console.log(req.body) 

 const sequelize = new sequelize(postgres_connection_string,{});

  await sequelize.query("Insert In to foods(id,name,category,gallry,description,duration) values (id,name,category,gallry,description,duration);",{ 
replecements: {
     id:10,    
     name:"coffee",    
     category:"drink",    
     gallery:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRqvC-sPX7tuKPuYl3KArwLD7eM4Jsg55aOa_d1buTwDukYvNuPd1rcdappAxj15oecwc&usqp=CAU",    
  description:"the best one",    
  duration:"15 min", }   
  })
});

