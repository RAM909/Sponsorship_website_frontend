import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../redux/features/loadingSlice";
import { setUser } from "../redux/features/userSlice";
import axios from "axios";

const PrivateRoute = ({ children }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
//getuser
  const getUSer = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/getUser",
        {
          token: localStorage.getItem("token"),
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      
      if (res.data.success) {
        dispatch(setUser(res.data.data));
      } else {
        <Navigate to="/login" />;
        localStorage.clear()
      }
    } catch (error) {
    //   dispatch(hideLoading());
      localStorage.clear();
      console.log(`Error in getting user:${error}`);
    }
  };

  useEffect(() => {
    if(!user){
      getUSer();
    }
  }, [user,getUSer]);
  if (localStorage.getItem("token")) {
    return children;
  } else {
    <Navigate to="/login" />;
  }
};

export default PrivateRoute;
