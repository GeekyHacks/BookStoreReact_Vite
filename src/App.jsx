import { Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/Css/App.css';
import BooksSection from './components/Books/BooksSection';
import CatContainer from './components/Categories/CatContainer';
import NavBar from './components/NavBar';
function App() {
  return (
    <div className="App">
      <NavBar />
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
