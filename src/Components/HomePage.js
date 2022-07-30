// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
// import pic from '../images/main-pic.png';
// import dogPic from '../images/dogs.png';

// import { getDogs, dogActions } from '../Redux/mainPage';

// const HomePage = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getDogs());
//   }, []);

//   const dog = useSelector((state) => state.dog);

//   const Ascending = (order) => {
//     let sorted;

//     if (order === 'z-a') {
//       sorted = [...dog].sort((a, b) => b.name.localeCompare(a.name));
//     } else if (order === 'a-z') {
//       sorted = [...dog].sort((a, b) => a.name.localeCompare(b.name));
//     }
//     dispatch(dogActions.sort(sorted));
//   };

//   return (
//     <div className="page">
//       <div className="main-section">
//         <img src={pic} alt="dog-pic" />
//         <div className="main-count">
//           <h2>Total Breeds</h2>
//           <h2>{dog.length}</h2>
//         </div>
//       </div>
//       <div className="sort-wrap">
//         <div className="sort-dogs">
//           <span className="sort-title">Sort By Order:</span>
//           <select
//             className="sort"
//             onChange={(e) => {
//               Ascending(e.target.value);
//             }}
//           >
//             <option value="sort">Sort</option>
//             <option value="a-z">A to Z</option>
//             <option value="z-a">Z to A</option>
//           </select>
//         </div>
//       </div>
//       {dog.map((data) => (
//         <div key={data.id} className="dogs-list">
//           <Link to={`/Dogs/${data.name}`}>
//             <div id={data.id} className="first-column">
//               <img id={data.id} src={dogPic} alt="dog" />
//               <h3 id={data.id}>Dog&apos;s Breed</h3>
//               <h3 id={data.id}>{data.name}</h3>
//             </div>
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default HomePage;

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import pic from '../images/main-pic.png';
import dogPic from '../images/dogs.png';
import { getDogs } from '../Redux/mainPage';
import Filter from './Filter';

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDogs());
  }, []);
  const dog = useSelector((state) => state.dog);
  // const Ascending = (order) => {
  //   let sorted;
  //   if (order === 'z-a') {
  //     sorted = [...dog].sort((a, b) => b.name.localeCompare(a.name));
  //   } else if (order === 'a-z') {
  //     sorted = [...dog].sort((a, b) => a.name.localeCompare(b.name));
  //   }
  //   dispatch(dogActions.sort(sorted));
  // };
  return (
    <div className="page">
      <div className="main-section">
        <img src={pic} alt="dog-pic" />
        <div className="main-count">
          <h2>Total Breeds</h2>
          <h2>{dog.length}</h2>
        </div>
      </div>
      <div className="sort-wrap">
        <Filter dog={dog} />
      </div>
      {dog.map((data) => (
        <div key={data.id} className="dogs-list">
          <Link to={`/Dogs/${data.name}`}>
            <div id={data.id} className="first-column">
              <img id={data.id} src={dogPic} alt="dog" />
              <h3 id={data.id}>Dog&apos;s Breed</h3>
              <h3 id={data.id}>{data.name}</h3>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default HomePage;
