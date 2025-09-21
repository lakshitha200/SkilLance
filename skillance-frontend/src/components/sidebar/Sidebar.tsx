import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUser } from "../../context/UserProvider";
import { getDashboardType } from "../../utill/helper";
import { signOut } from "../../services/authService";
import toast from "react-hot-toast";

const DashboardSidebar = () => {

    const { user, fetchUser } = useUser();
    const [isOpen, setIsOpen] = useState(false);
    const dashboardUrl = getDashboardType(user);
    const navigate = useNavigate();


    const logOut = () => {
        console.log("Logout")
        signOut();
        toast.success('Logout Success!');
        fetchUser();
        navigate("/");
    }
    return (
        <>
            {/* Mobile toggle button */}
            <div className="lg:hidden p-4">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-primary text-white px-4 py-2 rounded-md"
                >
                    {isOpen ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
                </button>
            </div>
            {/* Sidebar Navigation */}
            <div className={`
                 fixed lg:relative top-0 left-0 h-full bg-white rounded-xl shadow-sm border-2 border-solid
                transform ${isOpen ? "translate-x-0" : "-translate-x-full"} 
                transition-transform duration-300 ease-in-out
                lg:translate-x-0 lg:w-1/4
            `}>
                {isOpen && <div>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="bg-primary text-white px-4 py-2 rounded-md absolute right-4 top-4"
                    >
                        {isOpen ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
                    </button>
                </div>}
                <div className="bg-white">
                    <div className="p-6 border-b border-gray-100">
                        <div className="flex items-center mt-3">
                            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mr-4">
                                <span className="text-xl font-bold text-primary">{user?.username.slice(0, 2).toUpperCase()}</span>
                            </div>
                            <div>
                                <h2 className="font-bold">{user?.username}</h2>
                                {user?.role == 'ROLE_FREELANCER' ? <p className="text-gray-600 text-sm">Level 2 Seller</p> : <p className="text-gray-600 text-sm">Pro Member</p>}
                            </div>
                        </div>
                        {user?.role == 'ROLE_FREELANCER' &&
                            <div className="flex items-center mt-4">
                                <div className="flex text-yellow-400 mr-2 ">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star-half-stroke"></i>
                                </div>
                                <span className="text-gray-600 text-sm">4.8 (128 reviews)</span>
                            </div>
                        }

                    </div>

                    <div className="p-5 lg:overflow-y-visible overflow-y-auto max-h-[calc(100vh-180px)] lg:max-h-full">
                        <h3 className="text-xs uppercase text-gray-500 tracking-wider mb-3 pl-3">Main</h3>
                        <NavLink to={dashboardUrl} className={"nav-item flex items-center py-3 px-4 text-gray-700 hover:text-primary"}>
                            <i className="fa-solid fa-gauge-high mr-3"></i>
                            <span>Dashboard</span>
                        </NavLink>
                        <NavLink to={"/orders"} className={"nav-item flex items-center py-3 px-4 text-gray-700 hover:text-primary"}>
                            <i className="fa-solid fa-briefcase mr-3"></i>
                            <span>Orders</span>
                            <span className="ml-auto bg-primary text-white text-xs px-2 py-1 rounded-full">3</span>
                        </NavLink>


                        {user?.role == 'ROLE_FREELANCER' &&
                            <>
                                <NavLink to={"/services"} className={"nav-item flex items-center py-3 px-4 text-gray-700 hover:text-primary"}>
                                    <i className="fa-solid fa-list-check mr-3"></i>
                                    <span>Services</span>
                                </NavLink>
                                <NavLink to={"/earnings"} className={"nav-item flex items-center py-3 px-4 text-gray-700 hover:text-primary"}>
                                    <i className="fa-solid fa-chart-simple mr-3"></i>
                                    <span>Earnings</span>
                                </NavLink>
                            </>

                        }

                        <NavLink to={"/messages"} className={"nav-item flex items-center py-3 px-4 text-gray-700 hover:text-primary"}>
                            <i className="fa-solid fa-message mr-3"></i>
                            <span>Messages</span>
                            <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">5</span>
                        </NavLink>

                        <h3 className="text-xs uppercase text-gray-500 tracking-wider mb-3 mt-6 pl-3">Account</h3>
                        <a href="#" className="nav-item flex items-center py-3 px-4 text-gray-700 hover:text-primary">
                            <i className="fa-solid fa-user mr-3"></i>
                            <span>Profile</span>
                        </a>
                        <a href="#" className="nav-item flex items-center py-3 px-4 text-gray-700 hover:text-primary">
                            <i className="fa-solid fa-credit-card mr-3"></i>
                            <span>Payment Methods</span>
                        </a>
                        <a href="#" className="nav-item flex items-center py-3 px-4 text-gray-700 hover:text-primary">
                            <i className="fa-solid fa-gear mr-3"></i>
                            <span>Settings</span>
                        </a>
                        <div className="nav-item flex items-center py-3 px-4 text-gray-700 hover:text-primary" onClick={()=>logOut()}>
                            <i className="fa-solid fa-right-from-bracket mr-3"></i>
                            <span>Logout</span>
                        </div>

                        {/* Switch  View */}
                        {
                            user?.role == 'ROLE_FREELANCER' ?
                                <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
                                    <h3 className="font-bold mb-4">Switch to Buyer View</h3>
                                    <p className="text-gray-600 text-sm mb-4"> Manage your orders and hired services</p>
                                    <button className="w-full bg-primary text-white py-2 rounded-md hover:bg-green-600 transition">
                                        Buyer Dashboard
                                    </button>
                                </div>
                                :
                                <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
                                    <h3 className="font-bold mb-4">Switch to Seller View</h3>
                                    <p className="text-gray-600 text-sm mb-4">Manage your seller account and services</p>
                                    <button className="w-full bg-primary text-white py-2 rounded-md hover:bg-green-600 transition">
                                        Seller Dashboard
                                    </button>
                                </div>
                        }
                    </div>
                </div>




            </div>
        </>
    )
}

export default DashboardSidebar