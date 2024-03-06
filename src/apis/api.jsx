import axios from "axios";
const host = "http://localhost:5000";

export const postUserLogin = async (data) => {
    try {
        console.log(data);
        const response = await axios.post(`${host}/api/users/login`, data);
        console.log(response.data);
        return response.data;
    } catch (error) {
        return error;
    }
};

export const postUserRegister = async (data) => {
    try {
        console.log(data);
        const response = await axios.post(`${host}/api/users/register`, data);
        return response.data;
    } catch (error) {
        toast.error(error.response.data.errors);
        return error;
    }
};


export const getSponserdata = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log(token);
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.post(`${host}/api/sponsor/getAllSponsors`, { headers });
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

