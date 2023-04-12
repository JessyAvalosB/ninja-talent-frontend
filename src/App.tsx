import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import EditUser from "./pages/EditUser/EditUser";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/edit/:id" Component={EditUser} />
      </Routes>
    </Router>
  );
};

export default App;
