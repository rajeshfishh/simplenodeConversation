const express = require('express');
const app = express();




app.get('/',(req,res)=>{
    res.send("Welcome to the aws processes simplenodeConversation suceed2");

});



const port = process.env.port || 3000;

app.listen(port, () => {
  console.log("Server is up and listening on 3003...")
})
