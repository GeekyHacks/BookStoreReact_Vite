import BookItem from './BookItem';
import { useSelector, useDispatch } from 'react-redux';
import { addBook, removeBook } from './bookSlice';
import Categories from '../../components/Categories';

const BooksContainer = () => {
  // useSelector allow us to pick the desired item from a store state value.
  // state.<name of the reducer slice>.<the data you wanna pick>
  const books = useSelector((state) => state.books.bookItems);
  // dispatch allow us to update the state after using reducers and useselectors
  // const dispatch = useDispatch();

  const result = (
    <div className="BooksContainer">
      <Categories />
    </div>
  );
  return result;
};

export default BooksContainer;
