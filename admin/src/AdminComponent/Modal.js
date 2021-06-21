import React, { useState } from 'react';
import axios from 'axios';
import '../css/Modal.css';


export const Modal = ({ show, close, messageto, query }) => {

  const [message, setInput] = useState(
    {
      answer: ""
    })

  function handleChange(event) {

    const { name, value } = event.target;

    setInput(prevInput => {
      return {
        ...prevInput,
        [name]: value
      }
    })
  }

  function sendEmail() {
    var name = {
      query: query,
      message: message.answer,
      messageto: messageto
    }

    axios.post("http://localhost:3030/SendMail/Send", name, {});
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
          <textarea onChange={handleChange} value={message.answer} name="answer" style={{ width: '600px', height: '100px' }} />
        </div>
        <div className="modal-footer">
          <form onSubmit={sendEmail}>
            <button className="btn-cancel">Send</button>
          </form>
          <button onClick={close} className="btn-cancel">Close</button>

        </div>
      </div>
    </div>
  )
};




