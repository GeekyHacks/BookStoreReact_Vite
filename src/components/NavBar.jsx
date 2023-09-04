import {  NavLink } from 'react-router-dom';
import accountPic from '../assets/account-circle.svg';
const NavBar = () => {
  return (
    <nav className="navBar">
      <div className="fstdiv">
        <NavLink className="bookstoreTitle" to="/BookStoreReact_Vite/">
          Bookstore CMS
        </NavLink>
        <NavLink className="NavLink" to="/BookStoreReact_Vite/books">
          Books
        </NavLink>
        <NavLink className="NavLink" to="/BookStoreReact_Vite/categories">
          Categories
        </NavLink>
        <NavLink className="NavLink" to="/BookStoreReact_Vite/contact">
          Contact
        </NavLink>
      </div>

      <NavLink className="accountPic" to="/BookStoreReact_Vite/">
        <img src={accountPic} alt="" />
      </NavLink>
    </nav>
  );
};

export default NavBar;
