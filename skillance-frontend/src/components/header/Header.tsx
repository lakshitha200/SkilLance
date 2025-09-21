import { NavLink, useNavigate } from 'react-router-dom'
import './Header.css'
import SignUp from '../../pages/signUp/SignUp'
import { useState } from 'react';
import { useUser } from '../../context/UserProvider';
import { signOut } from '../../services/authService';
import toast from 'react-hot-toast';
import { getDashboardType } from '../../utill/helper';
const Header = () => {

    const navigate = useNavigate();
    const [showSignIn, setShowSignIn] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);

    const { user, fetchUser } = useUser();
    const dashboardUrl = getDashboardType(user);

    const logOut = () => {
        console.log("Logout")
        signOut();
        fetchUser();
        toast.success('Logout Success!');
        navigate("/");
    }

    return (
        <>
            {/* Navigation */}
            <nav className="bg-white shadow-md sticky top-0 z-50">
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    <div className="flex items-center">
                        <NavLink to="/"><span className="text-primary text-2xl font-bold"><i className="fa-solid fa-bullseye mr-2"></i>Skil-Lance</span></NavLink>

                    </div>

                    <div className="hidden md:flex space-x-8">
                        <NavLink to="/" className="hover:text-primary transition">Home</NavLink>
                        <NavLink to="/services" className="hover:text-primary transition">Services</NavLink>
                        <NavLink to="/how-it-works" className="hover:text-primary transition">How it Works</NavLink>
                        <NavLink to="/about" className="hover:text-primary transition">About</NavLink>
                    </div>

                    {
                        user ?
                            <div className="relative inline-block text-left group">
                                {/* Dropdown button */}
                                <button className="flex items-center focus:outline-none">
                                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                        <span className="text-primary font-semibold">{user.username.slice(0, 2).toUpperCase()}</span>
                                    </div>
                                    <span className="ml-2 hidden md:inline">{user.username}</span>
                                    <i className="fa-solid fa-chevron-down ml-2 text-gray-500"></i>
                                </button>

                                {/* Dropdown menu */}
                                <div className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    <div className="py-1">
                                        <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                                            Profile
                                        </a>
                                        <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer" onClick={() => navigate(dashboardUrl)}>
                                            Dashboard
                                        </a>
                                    </div>
                                    <div className="py-1">
                                        <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer" onClick={() => logOut()}>
                                            <i className="fa-solid fa-right-from-bracket mr-3"></i>
                                            Logout
                                        </a>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="flex items-center space-x-4">
                                <button type='button' className="text-gray-600 hover:text-primary transition"
                                    onClick={() => setShowSignIn(true)}>Sign In</button>
                                <button type='button' className="bg-primary text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
                                    onClick={() => setShowSignUp(true)}>Sign Up</button>
                            </div>

                    }


                    {/* <div className="flex items-center space-x-4">
                        <div className="relative">

                        </div>
                    </div> */}




                </div>
            </nav>

            {showSignIn && <SignUp type={"sign-in"} onClose={() => setShowSignIn(false)} />}
            {showSignUp && <SignUp type={"sign-up"} onClose={() => setShowSignUp(false)} />}
        </>
    )
}

export default Header