const express = require("express")
const app = express()
const twilio = require('twilio')


dotenv.config()



 function sendsms(){
        
    const client = new twilio(process.env.twilio_SID , process.env.twilio_AUTH__TOKEN)
     
    return client.messages 
    .create({body: "hey this is a message "   , from:'+12055480343' , to: process.env.PHONE_NUMBER  })
   .then(message =>
    
     
    console.log(message , "message sent "))
   .catch(err => {
    
    console.log(err   , "message not sent" )
})



}
 
sendsms()

app.listen(5000 , () => console.log("lestining at the server"))