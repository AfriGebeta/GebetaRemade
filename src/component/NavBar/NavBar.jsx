import {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../../context/AuthProvider';
import {useLocation} from 'react-router-dom';
import MainNav from './MainNav';
import DashBoardNav from './DashBoardNav';

function NavBar() {
 const [color, setColor] = useState("Dark");
 const [textColor, setTextColor] = useState("white");
 const { isAuthenticated } = useContext(AuthContext);
 const location = useLocation();

 useEffect(() => {
  if(location.pathname == "/documentation" || location.pathname == "/playground"){
    setColor("white");
    setTextColor("Dark");
  } else {
    setColor("Dark");
    setTextColor("white");
  }
 }, [location]);

 return isAuthenticated ? <DashBoardNav color={color} textColor={textColor}/> : <MainNav color={color} textColor={textColor}/>;
}

export default NavBar;
