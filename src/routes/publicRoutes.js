import Home from "../pages/Home/Home";
import About from "../pages/About.js";
import Books from "../pages/Books.js";
import BestSelling from "../pages/BestSelling.js";
import Contact from "../pages/Contact.js";
import Login from "../pages/Login.js";
import SignUp from "../pages/SignUp.js";
import NotFound from "../pages/NotFound";
import Search from "../pages/Search";
// Routes
export const publicRoutes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/home", name: "Home", Component: Home },
  { path: "/about", name: "About", Component: About },
  { path: "/contact", name: "Contact", Component: Contact },
  { path: "/books", name: "Books", Component:  Books},
  { path: "/best-selling", name: "BestSelling", Component: BestSelling },
  { path: "/login", name: "Login", Component: Login },
  { path: "/sign-up", name: "SignUp", Component: SignUp},
  { path: "/search", name: "Search", Component: Search},
  { path: "*", name: "NotFound", Component: NotFound}
];