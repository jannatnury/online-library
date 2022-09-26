import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About.js";
import Books from "./pages/Books.js";
import BestSelling from "./pages/BestSelling.js";
import Contact from "./pages/Contact.js";
import Login from "./pages/Login.js";
import SignUp from "./pages/SignUp.js";
import Footer from "./components/Footer";

// Routes
const publicRoute = [
  { path: "/", name: "Home", Component: Home },
  { path: "/home", name: "Home", Component: Home },
  { path: "/about", name: "About", Component: About },
  { path: "/contact", name: "Contact", Component: Contact },
  { path: "/books", name: "Books", Component:  Books},
  { path: "/best-selling", name: "BestSelling", Component: BestSelling },
  { path: "/login", name: "Login", Component: Login },
  { path: "/sign-up", name: "SignUp", Component: SignUp}
];

function App() {
  return (
    <>
      <Navbar>
        <Routes>
          {/* Mapping of routes */}
          {
            publicRoute.map((route)=>(
              <Route path={route.path} element={<route.Component/>} />
            ))
          }
        </Routes>
        <Footer />
      </Navbar>
    </>
  );
}

export default App;
