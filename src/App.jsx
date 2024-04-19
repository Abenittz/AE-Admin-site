import "bootstrap-icons/font/bootstrap-icons.css";
// import Login from "./Login";
// import PrivateRoute from "./PrivateRoute";
import Home from "./Home";
// import Events from "./Events";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route
    //       path="*"
    //       element={
    //         // <PrivateRoute>
    //         <Home />
    //         // </PrivateRoute>
    //       }
    //     ></Route>
    //     {/* <Route path="/login" element={<Login />} /> */}
    //   </Routes>
    // </Router>
    <Router>
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
