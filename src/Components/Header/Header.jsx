import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { AuthContext } from "../../Providers/AuthProvider"


const Header = () => {
    const { user, signOutUser } = useContext(AuthContext)

    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        {user && <li><NavLink to={'/orders'}>Orders</NavLink></li>}
        <li><NavLink to={'/login'}>LogIn</NavLink></li>
        <li><NavLink to={'/register'}>Register</NavLink></li>
    </>

    const handleLogOut = () => {
        signOutUser()
            .then(() => console.log('User Logged Out Successfully'))
            .catch(error => console.log(error.message))
    }

    return (
        <div className="bg-base-200">
            <div className="navbar max-w-screen-2xl md:mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a href="/" className="btn btn-ghost text-xl">Auth Moha Milon</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ?
                        <>
                            <span>{user.email}</span>
                            <a onClick={handleLogOut} className="btn btn-sm">Sign Out</a>
                        </>
                        :
                        <Link to={'/login'}>
                            <button className="btn btn-sm">Login</button>
                        </Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default Header