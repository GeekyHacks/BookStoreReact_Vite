import { useSelector } from 'react-redux';

const CatContainer = () => {
  // useSelector allow us to pick the desired item from a store state value.
  // state.<name of the reducer slice>.<the data you wanna pick>
  const status = useSelector((state) => state.categories.status);

  return (
    <div className="CategoriesComponent">
      <h2 className="notFound"> Status:{status} </h2>
    </div>
  );
};

export default CatContainer;
