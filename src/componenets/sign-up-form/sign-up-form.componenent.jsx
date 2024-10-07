import { useState } from 'react';
import { createAuthUserWithUserandPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import Button from '../button/button.componenet';
import FormInput from '../form-input/form-input.component';
const defaultFormFields = {
    displayName : '',
    email : '',
    password : '',
    confirmPassword : ''
}



const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields;

    console.log(formFields)

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword){
             return alert("Ensure that the Passwords magittch");
        }
       try {
        const { user } = createAuthUserWithUserandPassword(email, password)
        await createUserDocumentFromAuth(user, { displayName })
        resetFormFields()
        } catch(error){
            if(error.code === 'auth/email-already-in-use'){
                console.log("Email already in Use, Please Sign In instead.")
            }
            else{
            console.log('user creation encountered an error :  ' + error)
            }
        }

        
    }
     const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value})
        
    }
     return (
        <div>
        <h1>Sign up with you email and password</h1>
        <form onSubmit={handleSubmit}>
           
            <FormInput
            label="Display Name"
             type="text" required 
            onChange={handleChange} 
            name='displayName' 
            value={displayName}/>

            
            <FormInput
            label="Email"
             type="email" required 
            onChange={handleChange} 
            name='email' 
            value={email}/>

           
            <FormInput
            label="Password"
             type="password" required 
            onChange={handleChange} 
            name='password' 
            value={password}/>

            
            <FormInput
            label="Confirm Password"
             type="password" required 
            onChange={handleChange} 
            name='confirmPassword' 
            value={confirmPassword} />
            <Button type="submit">Sign up</Button> 
        </form>
        </div>
    )
}

export default SignUpForm 