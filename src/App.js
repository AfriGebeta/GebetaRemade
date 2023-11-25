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
import Products from './pages/Products';
import Pricing from './pages/Pricing';
import "@fontsource/zen-dots";


// tod do fix this route error  
// try to fix the heatmap for large amount of data
function App() {
  return (
    <AuthProvider>
    <NavBar/>  
    <BrowserRouter> 
        <Routes>
            <Route path="/" element={<Main />} />
             <Route path="/documentation" element={<Documentation />} />
             <Route path="/playground" element={<PlayGround />} /> 
             <Route path="/products" element={<Products />} /> 
             <Route path="/pricing" element={<Pricing />} /> 
             
             <Route path="/dashboard" element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
              } />

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

         
         
    </BrowserRouter>
    <Footer />   
</AuthProvider>
    
      );
}


export default App;


