import { Routes, Route, Link } from 'react-router-dom';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/Css/App.css';
import accountPic from './assets/account-circle.svg';
import BooksContainer from './redux/books/BooksContainer';
import CatContainer from './redux/categories/CatContainer';

function App() {
  return (
    <div className="App">
      <nav className="navBar">
        <Link className="bookstoreTitle" to="/BookStoreReact_Vite/">
          Geeky Book Store
        </Link>
        <div className="navLinks">
          <Link className="link" to="/BookStoreReact_Vite/books">
            Books
          </Link>
          <Link className="link" to="/BookStoreReact_Vite/categories">
            Categories
          </Link>
          <Link className="link" to="/BookStoreReact_Vite/contact">
            Contact
          </Link>
          <Link className="bookstoreTitle" to="/BookStoreReact_Vite/">
            <img className="accountPic" src={accountPic} alt="" />
          </Link>
        </div>
      </nav>
      <Routes className="Routes">
        <Route path="/BookStoreReact_Vite/" element={<BooksContainer />} />
        <Route path="/BookStoreReact_Vite/books" element={<BooksContainer />} />
        <Route path="/BookStoreReact_Vite/contact" element={<Contact />} />
        <Route path="/BookStoreReact_Vite/*" element={<div className="notFound"> Page not found!! </div>} />
        <Route path="/BookStoreReact_Vite/categories" element={<CatContainer />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
