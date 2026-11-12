import { useContext, useState } from "react";
import { JobdataContext } from "../context/JobContext";
import api from "../lib/api";
import toast from "react-hot-toast";

function Jobs() {
  const { jobs, setJobs, setApplications } = useContext(JobdataContext);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [dashboardJobs, setDashboardJobs] = useState(null);
  const { seekerJobApplications, setSeekerJobApplications } =
    useContext(JobdataContext);
  // console.log(jobs);
  const getAllJobs = async () => {
    if (!jobs) {
      try {
        const res = await api.get("/api/v1/job/get-all-jobs");
        // console.log(res)
        if (res.status === 200 && res.data.success) {
          setJobs(res.data.data);
          //   console.log(jobs)
          return;
        }
      } catch (error) {
        setJobs(null);
        console.log(error.response ? error.response : error.message);
        return;
      }
    }
    return jobs;
  };

  const createJob = async (data) => {
    try {
      const res = await api.post("/api/v1/job/new-job", data);
      if (res.status === 201 && res.data.success) {
        toast.success(res.data.message);
        return res.data;
      }
    } catch (error) {
      console.log(error.response ? error.response : error.message);
      toast.error(error.response.data.message);
      return null;
    }
  };

  const applyJob = async (data) => {
    try {
      const application = await api.post("/api/v1/application/apply-job", data);

      if (application.status === 201 && application.data.success) {
        toast.success("Applied successfully.");
      }
    } catch (error) {
      console.log(error.response ? error.response : error.message);
      toast.error(error.response.data.message);
      return null;
    }
  };

  const activeJobs = async (company_id) => {
    try {
      const res = await api.get(`/api/v1/job/active-jobs/${company_id}`);
      if (res.status === 200 && res.data.success) {
        return setDashboardJobs(res.data.data);
      }
      setDashboardJobs(null);
    } catch (error) {
      setDashboardJobs(null);
      console.log(error.response ? error.response : error.message);
      // toast.error(error.response.data.message);
      return null;
    }
  };

  // const getAllJobsApp = async (jobsIds) => {
  //   console.log(jobsIds);
  //   const res = await api.get(
  //     `/api/v1/application/get-all-jobs-application/${jobsIds}`
  //   );
  // };

  const getAllApplication = async () => {
    try {
      const applications = await api.get(
        "/api/v1/application/get-all-application"
      );
      if (applications.status === 200 && applications.data.success) {
        setSeekerJobApplications(applications.data.data);
      }
    } catch (error) {
      console.log(error.response ? error.response : error.message);
      setSeekerJobApplications(null);
    }
  };

  const allApplications = async () => {
    try {
      const res = await api.get("/api/v1/application/get-all-jobs-application");
      // console.log(res.data.applications);

      // let count = 0;
      // res.data.applications.map(app=>{
      //   count += app.totalApplications
      // })
      // console.log(count)
      
      if (res.status === 200 && res.data.success) {
        setApplications(res?.data?.applications || null);
      }
    } catch (error) {
      console.log(error.response ? error.response : error.message);
      toast.error(error.response.data.message);
      return null;
    }
  };

  return {
    // API handlers
    getAllJobs,
    createJob,
    activeJobs,
    applyJob,
    // getAllJobsApp,
    getAllApplication,
    allApplications,

    // API States
    error,
    success,
    dashboardJobs,
    seekerJobApplications,
  };
}

export default Jobs;
