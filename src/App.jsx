import { Routes, Route, Link } from 'react-router-dom';
import MainContainer from './components/Books';
import Contact from './components/Contact';
import Categories from './components/Categories';
import Footer from './components/Footer';
import './styles/Css/App.css';
import accountPic from './assets/account-circle.svg';
import Counter from './counter/Counter';

function App() {
  return (
    <div className="App">
      <nav className="navBar">
        <Link className="bookstoreTitle" to="/BookStore_React/">
          Geeky Book Store
        </Link>
        <div className="navLinks">
          <Link className="link" to="/BookStore_React/books">
            Books
          </Link>
          <Link className="link" to="/BookStore_React/categories">
            Categories
          </Link>
          <Link className="link" to="/BookStore_React/contact">
            Contact
          </Link>
          <Link className="bookstoreTitle" to="/BookStore_React/">
            <img className="accountPic" src={accountPic} alt="" />
          </Link>
        </div>
      </nav>
      <Routes className="Routes">
        {/* <Route index element={<Home />} /> */}
        <Route path="/BookStore_React/" element={<MainContainer />} />
        <Route path="/BookStore_React/books" element={<MainContainer />} />
        <Route path="/BookStore_React/contact" element={<Contact />} />
        <Route path="/BookStore_React/categories" element={<Categories />} />
        {/* <Route path="/BookStore_React/*" element={<div className="notFound"> Page not found!! </div>} /> */}
        <Route path="/BookStore_React/*" element={<Counter />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
