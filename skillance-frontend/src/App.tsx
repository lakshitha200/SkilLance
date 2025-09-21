import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css'
import Home from './pages/home/Home'
import RootLayout from './layouts/RootLayout';
import Services from './pages/services/Services';
import About from './pages/about/About';
import HowItWorks from './pages/howItWorks/HowItWorks';
import Notfound from './pages/notfound/Notfound';
import Dashboard from './pages/dashboard/Dashboard';
import '@tailwindplus/elements';
import ServiceDetails from './pages/services/serviceDetails/ServiceDetails';
import CreateService from './pages/services/createService/CreateService';
import { Toaster } from 'react-hot-toast';
import ProtectedRoute from './components/ProtectedRoute';


function App() {

   const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:name/:id" element={<ServiceDetails />} />
        <Route path="services/create-new" element={<CreateService />} />
        <Route path="how-it-works" element={<HowItWorks />} />
        <Route path="about" element={<About />} />
        <Route path="dashboard" element={ <ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path='*' element={<Notfound />}/>
        {/* <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} /> */}
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
       <Toaster />
    </>
  )
}

export default App
