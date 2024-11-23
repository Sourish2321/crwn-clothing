import { Fragment, useContext } from "react"
import { Route, Routes, Outlet, Link } from "react-router-dom"
import './navigation.styles.scss'
import { ReactComponent as CrwnLogo } from '../../../assets/crown.svg'
import { UserContext } from "../../contexts/user.context"
import { signOutUser } from "../../../utils/firebase/firebase.utils"

const NavigationBar = () => {
    const { currentUser } = useContext(UserContext)

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
                        ):( <Link className="nav-link" to="/auth                                                                                                                                                                                                                                              ">
                            Sign In
                        </Link>
                        )
                    }
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}


export default NavigationBar
