import React, { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';
import { Box, Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    /* Uncomment below if you want to enable the emailJS */

    // if (name !== '' && email !== '' && message !== '') {
    //   var templateParams = {
    //     name: name,
    //     email: email,
    //     message: message
    //   };

    //   console.log(templateParams);
    //   emailjs.send('service_id', 'template_id', templateParams, 'api_key').then(
    //     (response) => {
    //       console.log('SUCCESS!', response.status, response.text);
    //     },
    //     (error) => {
    //       console.log('FAILED...', error);
    //     },
    //   );
    //   setName('');
    //   setEmail('');
    //   setMessage('');
    // }
  };

  return (
    <div id="contact" className="py-10 px-6 bg-gray-50 text-center">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900">Contact Me</h1>
          <p className="mt-4 text-gray-700">Got a project waiting to be realized? Let's collaborate and make it happen!</p>
        </div>
        <Box
          ref={form}
          component="form"
          noValidate
          autoComplete="off"
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TextField
              required
              id="name"
              label="Your Name"
              placeholder="What's your name?"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={nameError}
              helperText={nameError ? "Please enter your name" : ""}
              fullWidth
            />
            <TextField
              required
              id="email"
              label="Email / Phone"
              placeholder="How can I reach you?"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={emailError}
              helperText={emailError ? "Please enter your email or phone number" : ""}
              fullWidth
            />
          </div>
          <TextField
            required
            id="message"
            label="Message"
            placeholder="Send me any inquiries or questions"
            multiline
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            error={messageError}
            helperText={messageError ? "Please enter the message" : ""}
            fullWidth
          />
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={sendEmail}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
          >
            Send
          </Button>
        </Box>
      </div>
    </div>
  );
}

export default Contact;
