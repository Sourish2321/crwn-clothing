import SignUpForm from '../../sign-up-form/sign-up-form.componenent.jsx';
import SignInForm from '../../sign-in-form/sign-in-form.componenent.jsx';
import './authentication.styles.scss'

const Authentication = () => {


    return (<div className='authentication-container'>
        <SignInForm />
        <SignUpForm />
    </div>
    )
}

export default Authentication