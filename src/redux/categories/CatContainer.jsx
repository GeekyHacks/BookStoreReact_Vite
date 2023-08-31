import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from './catSlice';

const CatContainer = () => {
  const status = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();

  // Dispatch the action immediately (simulate an event or condition)
  dispatch(checkStatus('Under construction'));

  return (
    <div className="CategoriesComponent">
      {status === 'Under construction' ? (
        <h2 className="notFound"> Status: Under construction</h2>
      ) : (
        <ul>
          {status.map((category) => (
            <li key={category.id}>{category.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CatContainer;
