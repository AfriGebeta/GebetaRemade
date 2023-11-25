import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import MainNav from './MainNav';
import DashBoardNav from './DashBoardNav';

function NavBar() {

 let color =  "Dark";
 let textColor =  "white";

 const currentPath = window.location.pathname;
 if(currentPath == "/documentation" || currentPath == "/playground"){
    color = "white"
    textColor = "black"
 }else{
    color = "Dark"
    textColor = "white"
 }
 

 const { isAuthenticated } = useContext(AuthContext);

 return isAuthenticated ? <DashBoardNav color={color}  textColor={textColor}/> : <MainNav  color={color}  textColor={textColor}/>;
}
export default NavBar