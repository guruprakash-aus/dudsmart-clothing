import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/ShopPage";

// const HatsPage = () => {
//   const location = useLocation();
//   console.log(location)
//   return (
//     <div>
//       <h1>Hats Page</h1>
//     </div>
//   );
// };

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
