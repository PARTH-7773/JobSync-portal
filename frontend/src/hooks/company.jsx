import { useState } from "react";
import api from "../lib/api";
import toast from "react-hot-toast";

function useCompany() {
  const [success, setSuccess] = useState("");
  const [errors, setErrors] = useState("");
  const [data, setData] = useState("");

  const createCompanieProfile = async (data) => {
    try {
      const res = await api.post("/api/v1/companies/create-companie", data);
      if (res.status === 200 && res.data.success) {
        setData(res.data.data)
        toast.success(res.data.message);
        return res.data;
      }
    } catch (error) {
      console.log(error.response ? error.response : error.message);
      toast.error(error.response.data.errors[0].msg);
      // setErrors(error.response.data.errors[0].msg);
    }
  };

  const getComapanyProfile = async () => {
    try {
      const res = await api.get("/api/v1/companies/get-coompanie-profile");
      // console.log("company profile : ", res);
      setData(res.data.data)
      return res.data.data;
    } catch (error) {
      console.log(error.response ? error.response : error.message);
      return error;
    }
  };
  return { createCompanieProfile, getComapanyProfile, success, errors, data };
}

export default useCompany;
