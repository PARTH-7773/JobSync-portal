import { useContext } from "react";
import api from "../lib/api";
import { UserDataContext } from "../context/UserContext";
import toast from "react-hot-toast";
import { JobdataContext } from "../context/JobContext";

function useAuth() {
  const { setUser, setSeekerProfile  } = useContext(UserDataContext);
  const { setSeekerJobApplications } = useContext(JobdataContext);
  const register = async (data) => {
    // console.log(data);
    try {
      const response = await api.post("/api/v1/user/register", data);
      // console.log(response);
      if (response.status === 201 && response.data.success) {
        setUser(response.data.data);
        return response;
      }
    } catch (error) {
      // console.log(error.response);
      // console.log(error);
      return error.response ? error.response : error.message;
    }
  };

  const login = async (data) => {
    try {
      const response = await api.post("/api/v1/user/login", data);
      if (response.status === 200 && response.data.success) {
        setUser(response.data.data);
        return response;
      }
      // console.log(response)
    } catch (error) {
      // console.log(error.response ? error.response : error.message)
      return error.response ? error.response : error.message;
    }
  };

  const logout = async () => {
    try {
      const response = await api.get("/api/v1/user/logout");
      // console.log(response);
      if (response.status === 200 && response.data.success) {
        setUser("");
        setSeekerJobApplications(null);
        return response.data;
      }
    } catch (error) {
      return error.response ? error.response : error.message;
    }
  };

  const updateSeekerProfile = async (data) => {
    try {
      const res = await api.patch("/api/v1/user/update-profile", data);
      if (res.status === 200 && res.data.success) {
        toast.success("Profile Update Successfully");
      }
      console.log(res);
      return res.data;
    } catch (error) {
      return error.response ? error.response : error.message;
    }
  };

  const getSeekerProfile = async () => {
    try {
      const res = await api.get('/api/v1/user/seeker-profile');
      console.log(res)
      if (res.status === 200 && res.data.success) {
        setSeekerProfile(res.data.data)
        return;
      }
    } catch (error) {
      return error.response ? error.response : error.message;
    }
  };

  return { register, login, logout, updateSeekerProfile, getSeekerProfile };
}

export default useAuth;
