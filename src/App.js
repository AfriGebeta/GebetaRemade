import React , {useState} from 'react'
import { HashRouter as Router , Routes, Route, Link } from "react-router-dom";
import { AuthContext, AuthProvider } from './context/AuthProvider';
import './App.css';
import Billing from "./pages/Billing/index"
import Main from './pages/Main/index';
import Documentation from './pages/Documentation/index'
import PlayGround from './pages/Playground';
import Dashboard from './pages/Dashboard';
import Usage from './pages/usage';
import Priceplan from "./pages/priceplan"
import Account from './pages/Account';
import NavBar from './component/NavBar/NavBar';
import Footer from './component/Footer/Footer';
import FoF from "./pages/404"
import PrivateRoute from './routes/PrivateRoute';
import About from './pages/About';
import Products from './pages/Products';
import Pricing from './pages/Pricing';
import Privacy from './pages/Privacy';
import Confirm from './pages/EmailConfirmation/Confirm';
import Terms from './pages/Terms';
import ResetPassword from './pages/ResetPassword'
import "@fontsource/zen-dots";
import Contact from "./pages/Contact";


// tod do fix this route error  
// try to fix the heatmap for large amount of data
function App() {
  return (
    <AuthProvider>
     
    <Router> 
    <NavBar/> 
        <Routes>
            <Route path="/" element={<Main />} />
             <Route path="/documentation" element={<Documentation />} />
             <Route path="/playground" element={<PlayGround />} /> 
             {/* <Route path="/products" element={<Products />} />  */}
            <Route path = "/privacy" element={<Privacy/>} />
            <Route path = "/terms" element={<Terms/>} />
            <Route path = "/reset-password" element={<ResetPassword/>} />
            
            <Route path = "/confirm" element = {<Confirm/>} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* private route  */}
            <Route path="/dashboard" element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
              } />


            <Route path="/dashboard" element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
              } />
          
          <Route path="/billing" element={
              <PrivateRoute>
                <Billing />
              </PrivateRoute>
              } />

          <Route path="/pricing" element={<Pricing />} /> 

              <Route path="/usage" element={
              <PrivateRoute>
                <Usage />
              </PrivateRoute>
              } />
            
            <Route path="/priceplan" element={
              <PrivateRoute>
                <Priceplan />
              </PrivateRoute>
              } />
            
            <Route path="/account" element={
              <PrivateRoute>
                <Account />
              </PrivateRoute>
              } />

             <Route path="*" element={<FoF />} />
        </Routes>

         
        <Footer />   
    </Router>
   
</AuthProvider>
    
      );
}


export default App;


