import { Routes, Route, Link } from 'react-router-dom';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/Css/App.css';
import accountPic from './assets/account-circle.svg';
import BooksSection from './components/BooksSection';
import CatContainer from './components/CatContainer';

function App() {
  return (
    <div className="App">
      <nav className="navBar">
        <div className="fstdiv">
          <Link className="bookstoreTitle" to="/BookStoreReact_Vite/">
            Bookstore CMS
          </Link>
          {/* <div className="navLinks"> */}
            <Link className="link" to="/BookStoreReact_Vite/books">
              Books
            </Link>
            <Link className="link" to="/BookStoreReact_Vite/categories">
              Categories
            </Link>
            <Link className="link" to="/BookStoreReact_Vite/contact">
              Contact
            </Link>
          {/* </div> */}
        </div>

        <Link className="accountPic" to="/BookStoreReact_Vite/">
          <img src={accountPic} alt="" />
        </Link>
      </nav>
      <Routes className="Routes">
        <Route path="/BookStoreReact_Vite/" element={<BooksSection />} />
        <Route path="/BookStoreReact_Vite/books" element={<BooksSection />} />
        <Route path="/BookStoreReact_Vite/contact" element={<Contact />} />
        <Route path="/BookStoreReact_Vite/*" element={<div className="notFound"> Page not found!! </div>} />
        <Route path="/BookStoreReact_Vite/categories" element={<CatContainer />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
