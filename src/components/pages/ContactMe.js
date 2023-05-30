import React, { useState } from 'react';
import {
  BsFillEnvelopeAtFill,
  BsFillTelephoneFill,
} from 'react-icons/bs';

export default function ContactMe() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleMsgChange = (e) => {
    setMessage(e.target.value);
  };
  const formSubmit = (e) => {
    e.preventDefault();
    setName('');
    setMessage('');
  };

  return (
    <div className="row justify-content-center align-items-center mt-5">
      <div className="col-md-6">
        <h1 className="text-center"> Contact Me </h1>
        <form onSubmit={formSubmit} className="d-flex flex-column">
          <div className="form-group">
            <label htmlFor="name">Username:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={handleMsgChange}
              className="form-control"
            ></textarea>
          </div>
          <button type="submit" className="submitBtn">
            Submit Form
          </button>
          <div className="d-flex justify-content-center">
            <div className="d-flex">
              <BsFillEnvelopeAtFill className="m-2" />
              <p className="m-1">befuller2004@gmail.com</p>
            </div>
            <div className="d-flex">
              <BsFillTelephoneFill className="m-2" />
              <p className="m-1">(360)581-6455</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
