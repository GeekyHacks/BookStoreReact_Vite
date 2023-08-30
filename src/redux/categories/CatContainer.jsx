
import { useSelector, useDispatch } from 'react-redux';
import Categories from '../../components/Categories';

const CatContainer = () => {
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

export default CatContainer;
