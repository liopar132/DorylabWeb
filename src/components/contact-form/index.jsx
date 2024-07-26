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
        <>
        <img src={ContactHeader} alt="" className='h-1/2 w-full object-cover absolute top-0 -z-10'/>
        <div class="bg-gradient-to-t from-white to-transparent w-full h-1/2 absolute top-0 z-0 "></div>

        <div className='container min-w-full mt-40 py-4 px-10'>
            <div className='container mx-auto text-center flex flex-col items-center my-28'>
                <div className='bg-white rounded-xl shadow-md z-20 max-w-5xl'
                        // 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20'
                        >
                    <Grid container spacing={2} >
                        <Grid item xs={12} md={8}>
                            <form className='flex flex-col gap-5 p-6' 
                                onSubmit={handleSubmit}>
                                <h1 className='text-xl font-bold mb-5'>Contactez Nous !</h1>
                                <Grid container spacing={2} >
                                    <Grid item xs={12} md={6}>
                                    <TextField className='w-full' id="outlined-basic" label="Nom" variant="outlined" required />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                    <TextField className='w-full' id="outlined-basic" label="Prénom" variant="outlined" required />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                    <TextField className='w-full' id="outlined-basic" label="Entreprise" variant="outlined"/>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                    <TextField className='w-full' id="outlined-basic" label="Télephone" variant="outlined" onChange={handleChangePhone} helperText={phoneHelperText} error={phoneError}  required />
                                    </Grid>
                                    <Grid item xs={12}>
                                    <TextField className='w-full' id="outlined-basic" label="E-mail" variant="outlined" onChange={handleChangeEmail} helperText={emailHelperText} error={emailError} required/>
                                    </Grid>
                                    <Grid item xs={12}>
                                    <TextField className='w-full' id="outlined-basic" label="Sujet" variant="outlined" required/>
                                    </Grid>
                                    <Grid item xs={12}>
                                    <TextField className='w-full' id="outlined-basic" label="Contenu" variant="outlined" size='medium' required/>
                                    </Grid>
                                </Grid>

                                <Button type='submit' variant='contained'>Envoyer</Button>
                            </form>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <ContactInfo></ContactInfo>
                        </Grid>
                    </Grid>
                </div>

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
        </>
    )
}

export default ContactForm