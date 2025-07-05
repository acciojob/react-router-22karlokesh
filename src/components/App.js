
// import React from "react";
// import './../styles/App.css';

// const App = () => {
//   return (
//     <div>
//         {/* Do not remove the main div */}
//     </div>
//   )
// }

// export default App


import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./../styles/App.css";

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const Home = () => {
  return <h1>Welcome to my website!</h1>;
};

const About = () => {
  return <h1>This is a sample React Router program.</h1>;
};

export default App;

