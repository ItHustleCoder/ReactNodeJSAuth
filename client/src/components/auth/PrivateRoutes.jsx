import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../../redux/actions/user";

function PrivateRoutes({ children }) {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();

  console.log(isAuth);

  useEffect(() => {
    dispatch(auth());
  }, []);
  return isAuth ? children : <Navigate to="/login" />;
}

export default PrivateRoutes;
