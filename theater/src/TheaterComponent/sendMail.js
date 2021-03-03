import React from 'react';

var nodemailer = require('nodemailer');

const sendMail = () => {
  
  function sendEmail(){
  
  //   var transporter = nodemailer.createTransport({
  //   service: 'gmail',
  //   auth: {
  //     user: 'bookmytickets233361@gmail.com',
  //     pass: 'book@my@tickets'
  //   }
  // });
  
  // var mailOptions = {
  //   from: 'bookmytickets233361@gmail.com',
  //   to: 'bookmytickets233361@gmail.com',
  //   subject: 'demo',
  //   text: `test`
  // };
  
  // transporter.sendMail(mailOptions, function(error, info){
  //   if (error) {
  //     console.log(error);
  //   } else {
  //     console.log('Email sent: ' + info.response);
  //   }
  // });

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user:"bookmytickets233361@gmail.com", // generated ethereal user
      pass: "book@my@tickets", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = transporter.sendMail({
    from:'bookmytickets233361@gmail.com', // sender address
    to: "temp265650@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });
  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}
  return(

  <div className="theater" >
  <form style={{marginTop:'200px'}} >
    <button onClick={sendEmail} value="Send" >send</button>
    </form>
    </div>

  );
}

export default sendMail;


// function sendEmail() {
//   e.preventDefault();

//   e.target.header.value="MovieMood"
  
//   e.target.name.value="xyz"

//   e.target.message.value="hello"

// e.target.email.value="bookmytickets233361@gmail.com"
// // console.log(e.target.name.value)   
// // e.target.name.value="hello"
//  console.log(e.target.name.value)   
//  console.log(e.target.header.value)   
//  console.log(e.target.message.value)
//  console.log(e.target.email.value)
    


// //    cron.schedule("* * * * * *",function(){
   
//  // e.target.name.value="name changed"
// //   console.log(e.header)
//   const arr={
//     name:"rohit",
//     header:"rohit",
//     message:"123456",
//     email:"bookmytickets233361@gmail.com"

//   }
// }

//return (<>
 //<div className="admin">
 {/* </div><Form style={{marginTop:'200px',marginLeft:'100px'}} onSubmit={sendEmail}> */}
  {/* <Form.Row>
      <Form.Group >
      <Form.Label>Header</Form.Label>
      <input type="text" name="header" />
      </Form.Group>
      </Form.Row>
      <Form.Row>
      <Form.Group  >
      
      <Form.Label>Name</Form.Label>
      <input type="text" name="name" />
  
      </Form.Group>       
  </Form.Row>
  
  <Form.Row>
      <Form.Group>
      <Form.Label>To</Form.Label>
      <input type="email" name="email" />
      </Form.Group>
  </Form.Row>

  <Form.Row>
      <Form.Group>
      <Form.Label>Message</Form.Label>
      <Form.Control type="textarea" name="message"   />
      </Form.Group>
  </Form.Row> */}
  {/* <input type="submit" value="Send" />
 
</Form> */}
