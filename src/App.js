import React , {useState} from 'react'
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
import './App.css';
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
import { AuthContext, AuthProvider } from './context/AuthProvider';
import PrivateRoute from './routes/PrivateRoute';
import About from './pages/About';
import Products from './pages/Products';
import Pricing from './pages/Pricing';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import "@fontsource/zen-dots";


// tod do fix this route error  
// try to fix the heatmap for large amount of data
function App() {
  return (
    <AuthProvider>
     
    <BrowserRouter> 
    <NavBar/> 
        <Routes>
            <Route path="/" element={<Main />} />
             <Route path="/documentation" element={<Documentation />} />
             <Route path="/playground" element={<PlayGround />} /> 
             <Route path="/products" element={<Products />} /> 
            <Route path = "/privacy" element={<Privacy/>} />
            <Route path = "/terms" element={<Terms/>} />
            
             <Route path="/about" element={<About />} /> 
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
    </BrowserRouter>
   
</AuthProvider>
    
      );
}


export default App;


