import { Fragment } from "react"
import { Route, Routes, Outlet, Link } from "react-router-dom"
import './navigation.styles.scss'
import { ReactComponent as CrwnLogo } from '../../../assets/crown.svg'


const NavigationBar = () => {
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
                    <Link className="nav-link" to="/auth                                                                                                                                                                                                                                              ">
                        Sign In
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}


export default NavigationBar
