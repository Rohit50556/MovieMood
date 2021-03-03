import React,{useState,useEffect} from 'react';
import emailjs from 'emailjs-com';
import '../css/Modal.css';


export const Modal = ({ show, close,messageto,query }) => {
  

//  console.log("rc="+messageto)
  const [message,setInput]=useState(
    {
      answer:""
    })

    
    function handleChange(event){
       
      const {name,value}=event.target;
  
      setInput(prevInput=>{
          return {
              ...prevInput,
              [name]:value
          }
      })
  }

  function sendEmail(e) {
   e.preventDefault();
   var msg=""
   msg=message.answer
    
    e.target.name.value="Movie Mood"
    e.target.query.value=query
    e.target.message.value=msg
    e.target.email.value=messageto
//    e.target.message=message
//    cron.schedule("* * * * * *",function(){
     
//   e.target.name="name changed"
console.log(e.target.name.value)
console.log(e.target.query.value)
console.log(e.target.email.value)
console.log(e.target.message.value)

// console.log( e.target.name.value)    
    emailjs.sendForm('service_1y23j1p','template_rve8qx2', e.target, 'user_NEpIQRUhtcTSXsywCVe1k')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log("rohit="+error.text);
      });


     // console.log("sended")
   }

    return (
    <div className="modal-wrapper"
      style={{
        transform: show ? 'translateY(0vh)' : 'translateY(-80vh)',
        opacity: show ? '1' : '0'
      }}
    >
      <div className="modal-header">
        <p>Customer Query</p>
        <span onClick={close} className="close-modal-btn">x</span>
      </div>
      <div className="modal-content">
        <div className="modal-body">
          <h4>Query</h4>
          <p>{query}</p>
          <h4>Answer</h4>
          {/* <input type="text" style={{width:'600px'}}/> */}
          {/* <textarea value={this.state.value} onChange={this.handleChange} /> */}
          <textarea  onChange={handleChange} value={message.answer} name="answer" style={{width:'600px',height:'100px'}} />
        </div>
        <div className="modal-footer">
        <form className="contact-form" onSubmit={sendEmail} >
    
            <input type="hidden" name="name" />
            <input type="hidden" name="email" />
            <input type="hidden" name="query" />
            <input type="hidden" name="message" />
            <button className="btn-cancel" > Send</button>     
            </form>
          <button onClick={close} className="btn-cancel">Close</button>
       
        </div>
      </div>
    </div>
  )
};