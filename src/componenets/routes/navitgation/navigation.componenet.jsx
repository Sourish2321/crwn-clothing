import { Fragment, useContext } from "react"
import { Route, Routes, Outlet, Link } from "react-router-dom"
import './navigation.styles.scss'
import { CartContext } from "../../contexts/cart.context"
import CartIcon from "../../../componenets/cart-icon/cart-icon.componenet"
import CartDropdown from "../../cart-dropdown/cart-dropdown.component"
import { ReactComponent as CrwnLogo } from '../../../assets/crown.svg'
import { UserContext } from "../../contexts/user.context"
import { signOutUser } from "../../../utils/firebase/firebase.utils"

const NavigationBar = () => {
    const { currentUser } = useContext(UserContext)
    const { isCartOpen } = useContext(CartContext)
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <CrwnLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        Shop
                    </Link>
                    {
                        currentUser ? (
                            <span onClick={signOutUser} className="nav-link">Sign Out</span>
                        ):( <Link className="nav-link" to="/auth">
                            Sign In
                        </Link>
                        )
                    
                    }              
                    <CartIcon /> 
                <div>
                    {isCartOpen && <CartDropdown/ >}
                </div>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}


export default NavigationBar
