import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { publicRoutes } from "./routes/publicRoutes";



function App() {
  return (
    <>
      <Navbar>
        <Routes>
          {/* Mapping of routes */}
          {
            publicRoutes.map((route,index)=>(
              <Route key={index} path={route.path} element={<route.Component/>} />
            ))
          }
        </Routes>
        <Footer />
      </Navbar>
    </>
  );
}

export default App;
