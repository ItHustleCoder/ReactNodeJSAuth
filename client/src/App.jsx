import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "./redux/actions/user";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Header from "./components/parts/Headers";
import PrivateRoutes from "./components/auth/PrivateRoutes";
import Home from "./components/home/Home";

function App() {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
  }, []);

  return (
    <div className="min-h-screen w-full h-full">
      <BrowserRouter>
        {!isAuth && (
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        )}
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>

        {/* <Login /> */}
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
