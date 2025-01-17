import { useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { AuthContext } from "../../Providers/AuthProvider"


const Header = () => {
    const { user, signOutUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const links = <>
        {user
            && <>
                <li><NavLink to={'/orders'}>Orders</NavLink></li>
                <li><NavLink to={'/profile'}>Profile</NavLink></li>
                <li><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
            </>
        }

    </>

    const handleLogOut = () => {
        signOutUser()
            .then(() => {
                console.log('User Logged Out Successfully')
                navigate('/')
            })
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
                    <a href="/" className="btn btn-ghost text-xl">Firebase Auth 36</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end flex gap-3">
                    {user ?
                        <>
                            <a onClick={handleLogOut} className="btn btn-sm">Sign Out</a>
                            {
                                user.photoURL ? <img className="w-10 rounded-full" src={`${user?.photoURL}`} alt="" /> : <h1 className="md:text-xl text-xs">{user.email}</h1>
                            }
                        </>
                        :
                        <ul className="menu menu-horizontal px-1">
                            <NavLink className={'bg-emerald-500 text-white py-2 rounded-lg active:scale-95 hover:bg-emerald-400 transition-all px-4 btn-primary'} to={'/login'}>LogIn</NavLink>
                        </ul>
                    }
                </div>
            </div>
        </div>
    )
}

export default Header