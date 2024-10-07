import { signInwithGooglePopup } from '../../../utils/firebase/firebase.utils.js'
import { createUserDocumentFromAuth } from '../../../utils/firebase/firebase.utils.js';
import SignUpForm from '../../sign-up-form/sign-up-form.componenent.jsx';

const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await signInwithGooglePopup();
        const userDocRef = createUserDocumentFromAuth(user)

    }

    return (<div>
        <button onClick={logGoogleUser}> Sign in with Google Popup</button>
        <SignUpForm />
        <h1>SIGN IN PAGE</h1>
    </div>
    )
}

export default SignIn