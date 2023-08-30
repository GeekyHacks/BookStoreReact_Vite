// import BookItem from './BookItem';
import { useSelector } from 'react-redux';
// import { addBook, removeBook } from './bookSlice';

const BooksContainer = () => {
  // useSelector allow us to pick the desired item from a store state value.
  // state.<name of the reducer slice>.<the data you wanna pick>
  const books = useSelector((state) => state.books.bookItems);
  // dispatch allow us to update the state after using reducers and useselectors
  // const dispatch = useDispatch();

  return (
    <div className="CategoriesComponent">
      <h2 className="notFound"> Books:{books} </h2>
    </div>
  );
};

export default BooksContainer;
