"use client"; // Add this at the very top to make it a client component

import React, { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import emailjs from 'emailjs-com';

function Contact() {
    // State variables with correct typing
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const [nameError, setNameError] = useState<boolean>(false);
    const [emailError, setEmailError] = useState<boolean>(false);
    const [messageError, setMessageError] = useState<boolean>(false);

    // Correct typing for useRef, `null` as initial value since ref may be null before the DOM element is mounted
    const form = useRef<HTMLFormElement>(null);

    // Send email function with proper event type annotation
    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        // Set errors if any field is empty
        setNameError(name === '');
        setEmailError(email === '');
        setMessageError(message === '');

        // Proceed only if all fields are filled
        if (name && email && message) {
            const templateParams = {
                name,
                email,
                message
            };

            emailjs.send('service_id', 'template_id', templateParams, 'api_key').then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                },
                (error) => {
                    console.log('FAILED...', error);
                }
            );

            // Reset form fields
            setName('');
            setEmail('');
            setMessage('');
        }
    };

    return (
        <div id="contact" className="py-10">
            <div className="container mx-auto">
                <div className="bg-backround p-8 rounded-lg shadow-md">
                    <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
                    <p className="mb-6">Got a project waiting to be realized? Let's collaborate and make it happen!</p>
                    <Box
                        ref={form}
                        component="form"
                        noValidate
                        autoComplete="off"
                        className="space-y-6"
                        onSubmit={sendEmail} // Handle form submission
                    >
                        <div className="flex gap-4">
                            <TextField
                            className="w-full bg-backg text-foreg dark:bg-gray-300/80 dark:placeholder-gray-200 dark:text-gray-200"
                                required
                                id="outlined-required"
                                label="Your Name"
                                placeholder="What's your name?"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                error={nameError}
                               
                                
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Email / Phone"
                                placeholder="How can I reach you?"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                error={emailError}
                              
                                className="w-full bg-backg text-foreg dark:bg-gray-300/80  "
                            />
                        </div>
                        <TextField
                            required
                            id="outlined-multiline-static"
                            label="Message"
                            placeholder="Send me any inquiries or questions"
                            multiline
                            rows={10}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            error={messageError}
                            
                            className="w-full bg-backg text-foreg dark:bg-gray-300/80 mb "
                        />
                        <Button 
                            type="submit" 
                            variant="contained" 
                            className="float-right bg-foreground text-background hover:bg-purple-700 hover:text-white"
                            style={{ position: 'relative', top: '1rem' }}
                        >
                            Send
                            <SendIcon />
                        </Button>
                    </Box>
                </div>
            </div>
        </div>
    );
}

export default Contact;
