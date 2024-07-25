import React, { useState } from 'react'
import ContactHeader from './air-contionner.jpg'
import { Button, Input, TextField } from '@mui/material'

function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}
function isValidPhoneNumber(phoneNumber) {
  const phonePattern = /^(\+\d{1,3}[- ]?)?\d{10}$/;
  return phonePattern.test(phoneNumber);
}

function ContactForm() {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [emailHelperText, setEmailHelperText] = useState('');

    const [phone, setPhone] = useState('');
    const [phoneError, setPhoneError] = useState(false);
    const [phoneHelperText, setPhoneHelperText] = useState('');

    const [error, setError] = useState(false);

    const handleChangePhone = (event) => {
        const value = event.target.value;
        setPhone(value);
    }
    const handleChangeEmail = (event) => {
        const value = event.target.value;
        setEmail(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!isValidEmail(email)){
            setEmailError(true);
            setEmailHelperText('Invalid email address');
            setError(true)
        }
        if(!isValidPhoneNumber(phone)){
            setPhoneError(true);
            setPhoneHelperText('Invalid phone number')
            setError(true)
        } 

        if(error) return;
        alert('submited')

    };
    return (
        <div className='h-screen w-full'>
            <img src={ContactHeader} alt="" className='h-1/2 w-full object-cover'/>
            <div class="bg-gradient-to-b from-transparent to-white w-full h-1/2 absolute top-0 z-10 opacity-100"></div>
            <form className='bg-white rounded-md  shadow-xl p-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20
                flex flex-col gap-5' 
                onSubmit={handleSubmit}>
                <h1 className='text-xl font-bold mb-5'>Contactez Nous !</h1>
                <div className='flex flex-row gap-5'>
                    <TextField id="outlined-basic" label="Nom" variant="outlined" required />
                    <TextField id="outlined-basic" label="Prénom" variant="outlined" required />
                </div>
                <div className='flex flex-row gap-5'>
                    <TextField id="outlined-basic" label="Entreprise" variant="outlined"/>
                    <TextField id="outlined-basic" label="Télephone" variant="outlined" onChange={handleChangePhone} helperText={phoneHelperText} error={phoneError}  required />
                </div>
                <TextField id="outlined-basic" label="E-mail" variant="outlined" onChange={handleChangeEmail} helperText={emailHelperText} error={emailError} required/>
                <TextField id="outlined-basic" label="Sujet" variant="outlined" required/>
                <TextField id="outlined-basic" label="Contenu" variant="outlined" size='medium' required/>

                <Button type='submit' variant='contained'>Envoyer</Button>
            </form>
        </div>
    )
}

export default ContactForm