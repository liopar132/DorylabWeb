import React, { useState } from 'react'
import ContactHeader from './air-contionner.jpg'
import { Button, Grid, IconButton, Input, Snackbar, SnackbarContent, TextField } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import { Close } from '@mui/icons-material';
import ContactInfo from './ContactInfo';


function isValidEmail(email) {
    console.log(email)
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}
function isValidPhoneNumber(phoneNumber) {
    console.log(phoneNumber)
    const phonePattern = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    return phonePattern.test(phoneNumber);
}

function ContactForm() {
    // form state
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [emailHelperText, setEmailHelperText] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneError, setPhoneError] = useState(false);
    const [phoneHelperText, setPhoneHelperText] = useState('');
    const [error, setError] = useState(false);

    // snackbar
    const [open, setOpen] = useState(false);

    const emailValidation = (value) => {
        if(!isValidEmail(value)){
            setEmailError(true);
            setEmailHelperText('Invalid email address');
            setError(true)
        } else {
            setEmailError(false);
            setEmailHelperText('');
            setError(false)
        }
    }
    const phoneValidation = (value) => {
        if(!isValidPhoneNumber(value)){
            setPhoneError(true);
            setPhoneHelperText('Invalid phone number')
            setError(true)
        } else {
            setPhoneError(false);
            setPhoneHelperText('')
            setError(false)
        }
    }
    const handleChangePhone = (event) => {
        const value = event.target.value;
        setPhone(value);
        phoneValidation(value);
    }
    const handleChangeEmail = (event) => {
        const value = event.target.value;
        setEmail(value);
        emailValidation(value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if(!error){
            setOpen(true);
            // TODO submit logic
        }
    };

    const handleSnackBarClose = () => {
        setOpen(false)
        console.log("closed")
    }
    const action = (
        <React.Fragment>
        <IconButton
            size="small"
            aria-label="close"
            color="black"
            onClick={handleSnackBarClose}
        >
            <Close fontSize="small" />
        </IconButton>
        </React.Fragment>
    );
    return (
        <div className='h-screen w-full'>
            <img src={ContactHeader} alt="" className='h-1/2 w-full object-cover'/>
            <div class="bg-gradient-to-b from-transparent to-white w-full h-1/2 absolute top-0 z-10 opacity-100"></div>


            <div className='bg-white rounded-xl shadow-xl 
                    absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20'>
                <Grid container spacing={2} >
                    <Grid item xs={12} md={6}>
                        <form className='flex flex-col gap-5 p-6' 
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
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ContactInfo></ContactInfo>
                    </Grid>
                </Grid>
            </div>
            <Snackbar
                open={open}
                autoHideDuration={4000}
                onClose={handleSnackBarClose}
            >
                <SnackbarContent style={{
                        backgroundColor:'white',
                        color:'black'
                    }}
                    message="Message envoyé !"
                    action={action}
                />
            </Snackbar>
        </div>
    )
}

export default ContactForm