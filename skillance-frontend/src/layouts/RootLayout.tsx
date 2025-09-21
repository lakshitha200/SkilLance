import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import { Outlet, useLocation } from 'react-router-dom'
import DashboardSidebar from '../components/sidebar/Sidebar';

const RootLayout = () => {

    const location = useLocation();
    console.log(location)

    const pathArray = ["/dashboard", "/services/create-new"]
    console.log(pathArray.includes(location.pathname))
    return (
        <>
            <Header />

            {
            pathArray.includes(location.pathname) &&
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    <DashboardSidebar />
                    <Outlet />
                </div>
            </div>
             
             }
            
            {!pathArray.includes(location.pathname) && <Outlet />}
            {!pathArray.includes(location.pathname) && <Footer />}
        </>)
}

export default RootLayout