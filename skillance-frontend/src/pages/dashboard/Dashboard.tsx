import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserProvider';
import './Dashboard.css'
import { useEffect } from 'react';

const Dashboard = () => {
    const navigate = useNavigate();
    const { user, fetchUser } = useUser();
    useEffect(() => {
        fetchUser();
    },[])


    return (
        <>

            <div className="lg:w-3/4">

                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold">  <span className="text-red-500">Seller</span> Dashboard</h1>
                    <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-green-600 transition" onClick={() => navigate("../services/create-new")}>
                        <i className="fa-solid fa-plus mr-2"></i>Create New Service
                    </button>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="dashboard-card bg-white p-6 rounded-xl shadow-sm border-2 border-solid">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-gray-600">Active Orders</p>
                                <p className="text-2xl font-bold mt-2">3</p>
                            </div>
                            <div className="bg-blue-100 p-3 rounded-lg">
                                <i className="fa-solid fa-briefcase text-blue-600 text-xl"></i>
                            </div>
                        </div>
                        <p className="text-xs text-gray-500 mt-4"><span className="text-green-600">+2</span> from last week</p>
                    </div>

                    {
                        user?.role == 'ROLE_FREELANCER' ?
                            <>
                                <div className="dashboard-card bg-white p-6 rounded-xl shadow-sm border-2 border-solid">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="text-gray-600">Earnings</p>
                                            <p className="text-2xl font-bold mt-2 text-primary">$1,240</p>
                                        </div>
                                        <div className="bg-green-100 p-3 rounded-lg">
                                            <i className="fa-solid fa-credit-card text-green-600 text-xl"></i>
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-4"><span className="text-green-600">+$389</span> this month</p>
                                </div>
                                <div className="dashboard-card bg-white p-6 rounded-xl shadow-sm border-2 border-solid">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="text-gray-600">Services</p>
                                            <p className="text-2xl font-bold mt-2 text-primary">6</p>
                                        </div>
                                        <div className="bg-red-100 p-3 rounded-lg">
                                            <i className="fa-solid fa-list-check text-red-600 text-xl"></i>
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-4"><span className="text-green-600">+1</span> new service</p>
                                </div>
                            </>
                            :
                            <>
                                <div className="dashboard-card bg-white p-6 rounded-xl shadow-sm border-2 border-solid">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="text-gray-600">Total Spent</p>
                                            <p className="text-2xl font-bold mt-2">$247</p>
                                        </div>
                                        <div className="bg-purple-100 p-3 rounded-lg">
                                            <i className="fa-solid fa-credit-card text-purple-600 text-xl"></i>
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-4"><span className="text-green-600">+$89</span> this month</p>
                                </div>

                                <div className="dashboard-card bg-white p-6 rounded-xl shadow-sm border-2 border-solid">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="text-gray-600">Saved Items</p>
                                            <p className="text-2xl font-bold mt-2">7</p>
                                        </div>
                                        <div className="bg-red-100 p-3 rounded-lg">
                                            <i className="fa-solid fa-heart text-red-600 text-xl"></i>
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-4"><span className="text-green-600">+2</span> recently added</p>
                                </div>
                            </>
                    }






                    <div className="dashboard-card bg-white p-6 rounded-xl shadow-sm border-2 border-solid">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-gray-600">Messages</p>
                                <p className="text-2xl font-bold mt-2">5</p>
                            </div>
                            <div className="bg-green-100 p-3 rounded-lg">
                                <i className="fa-solid fa-message text-green-600 text-xl"></i>
                            </div>
                        </div>
                        <p className="text-xs text-gray-500 mt-4"><span className="text-green-600">+3</span> unread messages</p>
                    </div>

                </div>

                {/* Recent Orders */}
                <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold">Recent Orders</h2>
                        <a href="#" className="text-primary hover:underline">View all</a>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-left text-gray-500 text-sm border-b">
                                    <th className="pb-3">Order ID</th>
                                    <th className="pb-3">Service</th>
                                    <th className="pb-3">Buyer</th>
                                    <th className="pb-3">Price</th>
                                    <th className="pb-3">Status</th>
                                    <th className="pb-3">Delivery</th>
                                    <th className="pb-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                <tr>
                                    <td className="py-4">#DF2832</td>
                                    <td className="py-4">REST API Development</td>
                                    <td className="py-4">Michael Johnson</td>
                                    <td className="py-4">$89.00</td>
                                    <td className="py-4">
                                        <span className="order-status-badge bg-yellow-100 text-yellow-800">In Progress</span>
                                    </td>
                                    <td className="py-4">2 days left</td>
                                    <td className="py-4">
                                        <button className="text-primary hover:text-green-700 mr-2">
                                            <i className="fa-solid fa-pen"></i>
                                        </button>
                                        <button className="text-primary hover:text-green-700">
                                            <i className="fa-solid fa-eye"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-4">#DF2876</td>
                                    <td className="py-4">Database Design</td>
                                    <td className="py-4">Sarah Williams</td>
                                    <td className="py-4">$55.00</td>
                                    <td className="py-4">
                                        <span className="order-status-badge bg-blue-100 text-blue-800">In Review</span>
                                    </td>
                                    <td className="py-4">1 day left</td>
                                    <td className="py-4">
                                        <button className="text-primary hover:text-green-700 mr-2">
                                            <i className="fa-solid fa-pen"></i>
                                        </button>
                                        <button className="text-primary hover:text-green-700">
                                            <i className="fa-solid fa-eye"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-4">#DF2891</td>
                                    <td className="py-4">Microservices Architecture</td>
                                    <td className="py-4">David Chen</td>
                                    <td className="py-4">$120.00</td>
                                    <td className="py-4">
                                        <span className="order-status-badge bg-green-100 text-green-800">Delivered</span>
                                    </td>
                                    <td className="py-4">Completed</td>
                                    <td className="py-4">
                                        <button className="text-primary hover:text-green-700 mr-2">
                                            <i className="fa-solid fa-pen"></i>
                                        </button>
                                        <button className="text-primary hover:text-green-700">
                                            <i className="fa-solid fa-eye"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Recommended Services */}
                <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold">Recommended for You</h2>
                        <a href="#" className="text-primary hover:underline">See more</a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-start">
                            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                <i className="fa-solid fa-mobile-screen-button text-blue-600 text-xl"></i>
                            </div>
                            <div>
                                <h3 className="font-semibold">React Native App Development</h3>
                                <p className="text-gray-600 text-sm mt-1">By AppBuilder</p>
                                <div className="flex items-center mt-2">
                                    <div className="flex text-yellow-400 mr-2">
                                        <i className="fa-solid fa-star text-sm"></i>
                                        <i className="fa-solid fa-star text-sm"></i>
                                        <i className="fa-solid fa-star text-sm"></i>
                                        <i className="fa-solid fa-star text-sm"></i>
                                        <i className="fa-solid fa-star-half-stroke text-sm"></i>
                                    </div>
                                    <span className="text-gray-600 text-sm">(142)</span>
                                </div>
                                <p className="text-primary font-semibold mt-2">From $75.00</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                                <i className="fa-solid fa-cloud text-purple-600 text-xl"></i>
                            </div>
                            <div>
                                <h3 className="font-semibold">Cloud Deployment</h3>
                                <p className="text-gray-600 text-sm mt-1">By CloudMaster</p>
                                <div className="flex items-center mt-2">
                                    <div className="flex text-yellow-400 mr-2">
                                        <i className="fa-solid fa-star text-sm"></i>
                                        <i className="fa-solid fa-star text-sm"></i>
                                        <i className="fa-solid fa-star text-sm"></i>
                                        <i className="fa-solid fa-star text-sm"></i>
                                        <i className="fa-solid fa-star text-sm"></i>
                                    </div>
                                    <span className="text-gray-600 text-sm">(112)</span>
                                </div>
                                <p className="text-primary font-semibold mt-2">From $65.00</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold">Recent Activity</h2>
                        <a href="#" className="text-primary hover:underline">View all</a>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-start">
                            <div className="bg-green-100 p-2 rounded-full mr-4">
                                <i className="fa-solid fa-cart-shopping text-green-600"></i>
                            </div>
                            <div>
                                <p className="font-medium">You placed a new order</p>
                                <p className="text-gray-600 text-sm">REST API Development • 2 hours ago</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="bg-blue-100 p-2 rounded-full mr-4">
                                <i className="fa-solid fa-message text-blue-600"></i>
                            </div>
                            <div>
                                <p className="font-medium">You received a new message</p>
                                <p className="text-gray-600 text-sm">From JohnDev • 5 hours ago</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="bg-purple-100 p-2 rounded-full mr-4">
                                <i className="fa-solid fa-star text-purple-600"></i>
                            </div>
                            <div>
                                <p className="font-medium">You left a review</p>
                                <p className="text-gray-600 text-sm">For UI/UX Design service • 1 day ago</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="bg-yellow-100 p-2 rounded-full mr-4">
                                <i className="fa-solid fa-heart text-yellow-600"></i>
                            </div>
                            <div>
                                <p className="font-medium">You saved a service</p>
                                <p className="text-gray-600 text-sm">Mobile App Development • 2 days ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Dashboard