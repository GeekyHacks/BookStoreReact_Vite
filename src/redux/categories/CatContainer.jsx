// import { useSelector, useDispatch } from 'react-redux';
// import {checkStatus} from './catSlice';
// const CatContainer = () => {
//   // useSelector allow us to pick the desired item from a store state value.
//   // state.<name of the reducer slice>.<the data you wanna pick>
//   const status = useSelector((state) => state.categories.categories);
//   const dispatch = useDispatch();
//   // Dispatch the action immediately (simulate an event or condition)
//   dispatch(checkStatus('Under construction'));

//   return (
//     <div className="CategoriesComponent">
//       {Array.isArray(status) && status.length > 0 ? (
//         <ul>
//           {status.map((category) => (
//             <li key={category.id}>{category.name}</li>
//           ))}
//         </ul>
//       ) : (
//         <h2 className="notFound"> Status: Under construction</h2>
//       )}
//     </div>
//   );
// };

// export default CatContainer;

import React from 'react';
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
