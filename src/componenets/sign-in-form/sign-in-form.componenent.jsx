import { useState } from 'react';
import { signInwithGooglePopup, createUserDocumentFromAuth, signInWithEmailAndPassword, signInAuthUserWithUserandPassword } from '../../utils/firebase/firebase.utils';
import './sign-in-form.styles.scss'
import Button from '../button/button.componenet';
import FormInput from '../form-input/form-input.component';
const defaultFormFields = {
    email : '',
    password : '',
}



const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInwithGoogle = async () => {
        await signInwithGooglePopup();        

    }

    const handleSubmit = async (event) => {
        event.preventDefault();
       try {
        const {user} = await signInAuthUserWithUserandPassword(email, password)
        
        resetFormFields()
        } catch(error){
            console.log(error)
            if(error.code === 'auth/invalid-credential') {
                alert("This user and password combination is incorrect")
            }
            if(error.code === 'auth/too-many-requests'){
                alert(" Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.")
            }
            else {
                console.log('user login encountered an error :  ' + error)
            }
            
        }

        
    }
     const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({...formFields, [name]: value})
        
    }
     return (
        <div className='sign-up-container'>
        <h2>Already have an account?</h2>
        <span>Sign In with you email and password</span>
        <form onSubmit={handleSubmit}>

            <FormInput 
            label="Email"
            type="email"
            required
            onChange={handleChange} 
            name='email' 
            value={email}/>

            <FormInput
            label="Password"
            type="password" 
            required 
            onChange={handleChange} 
            name='password' 
            value={password}/>
            <div className='buttons-container'>
                <Button type="submit">Sign in</Button>
                <Button type='button' buttonType="google" onClick={signInwithGoogle}>Google Sign in</Button>
            </div>  
        </form>
        </div>
    )
}

export default SignInForm 