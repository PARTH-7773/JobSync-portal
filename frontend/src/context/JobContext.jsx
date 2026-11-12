import { createContext, useEffect, useState } from "react";
import api from "../lib/api";
import { Loader } from "lucide-react";


export const JobdataContext = createContext();

function JobContext({ children }) {
  const [jobs, setJobs] = useState([]);
  const [loadingJobs, setLoading] = useState(true);
  const [seekerJobApplications, setSeekerJobApplications] = useState("");
  const [Applications, setApplications] = useState("");
  const [browseAllJobs, setBrowseAllJobs] = useState("");
  
  const browseJobs = async () => {
    try {
      const res = await api.get("/api/v1/job/browse-all-jobs");
      if (res.status === 200 && res.data.success) {
        setBrowseAllJobs(res.data.data);
      }
    } catch (error) {
      console.log(error.response ? error.response : error.message);
      setJobs(null);
    } finally {
      setLoading(false);
    }
  };

  const getAllJobs = async () => {
    try {
      const res = await api.get("/api/v1/job/get-all-jobs");
      // console.log(res)
      if (res.status === 200 && res.data.success) {
        setJobs(res.data.data);
        //   console.log(jobs)
      }
    } catch (error) {
      console.log(error.response ? error.response : error.message);
      setJobs(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => await Promise.all([browseJobs(), getAllJobs()]))();
  }, [!jobs,!browseAllJobs]);

  if (loadingJobs) {
    return (
      <>
        <div className="flex justify-center items-center h-screen bg-gray-50">
          <span className="text-lg font-semibold text-gray-600 flex gap-1 items-center justify-center">
            <Loader className="h-5 w-5 animate-spin" />
            Loading Jobs....
          </span>
        </div>
      </>
    );
  }

  return (
    <div>
      <JobdataContext.Provider
        value={{
          jobs,
          setJobs,
          loadingJobs,
          setLoading,
          seekerJobApplications,
          setSeekerJobApplications,
          Applications,
          setApplications,
          browseAllJobs
        }}
      >
        {children}
      </JobdataContext.Provider>
    </div>
  );
}

export default JobContext;

// const jobData = [
//   {
//     id: 1,
//     compant_id: 11,
//     company_name: "Genius Tech",
//     title: "Full Stack Developer",
//     description: "Well knowledged of full stack and merdern development",
//     requirements: "MERN stack,API's and responsive",
//     location: "Ahmedabad",
//     salary_range: "3.5 to 4.5 LPA",
//     job_type: "Full Time",
//     category: "IT",
//     status: "active",
//     app_status:"rejected",
//     posted_date: "Apr 27",
//     company_details:{
//       industry:'Technology',
//       website:'https://tcs.com',
//       about:"This company type is MNC's and give the services of software related to build full flech"
//     }
//   },
//   {
//     id: 2,
//     compant_id: 12,
//     company_name: "Parth Development",
//     title: "Backend Developer",
//     description: "Well knowledged of full stack and merdern development",
//     requirements: "MERN stack,API's and responsive",
//     location: "Baroda",
//     salary_range: "3.5 to 4.5 LPA",
//     job_type: "Contract",
//     category: "IT",
//     status: "active",
//     posted_date: "Apr 27",
//     company_details:{
//       industry:'Technology',
//       website:'https://tcs.com',
//       about:"This company type is MNC's and give the services of software related to build full flech"
//     }
//   },
//   {
//     id: 3,
//     compant_id: 13,
//     company_name: "Banna infotech",
//     title: "AI Intern",
//     description: "Well knowledged AI and Basic ML",
//     requirements: "Well know about the basic AI model and algorithem",
//     location: "Gandhinagar",
//     salary_range: "3.5 to 4.5 LPA",
//     job_type: "Inteernship",
//     category: "IT",
//     status: "active",
//     posted_date: "Apr 27",
//     company_details:{
//       industry:'Technology',
//       website:'https://tcs.com',
//       about:"This company type is MNC's and give the services of software related to build full flech"
//     }
//   },
//   {
//     id: 4,
//     compant_id: 14,
//     company_name: "Genius Tech",
//     title: "DevOps Eng",
//     description: "Well knowledged of full stack and merdern development",
//     requirements: "MERN stack,API's and responsive",
//     location: "Surat",
//     salary_range: "3.5 to 4.5 LPA",
//     job_type: "Full Time",
//     category: "IT",
//     status: "active",
//     posted_date: "Apr 27",
//     company_details:{
//       industry:'Technology',
//       website:'https://tcs.com',
//       about:"This company type is MNC's and give the services of software related to build full flech"
//     }
//   },
//   {
//     id: 5,
//     compant_id: 15,
//     company_name: "Fortune Agency",
//     title: "Full Stack Developer",
//     description: "Well knowledged of full stack and merdern development",
//     requirements: "MERN stack,API's and responsive",
//     location: "Banglore",
//     salary_range: "3.5 to 4.5 LPA",
//     job_type: "Full Time",
//     category: "IT",
//     status: "active",
//     posted_date: "Apr 27",
//     company_details:{
//       industry:'Technology',
//       website:'https://tcs.com',
//       about:"This company type is MNC's and give the services of software related to build full flech"
//     }
//   },
//   {
//     id: 6,
//     compant_id: 16,
//     company_name: "Megemobo khush huaa",
//     title: "Data Analitycs",
//     description: "Well knowledged of full stack and merdern development",
//     requirements: "MERN stack,API's and responsive",
//     location: "Heydrabad",
//     salary_range: "3.5 to 4.5 LPA",
//     job_type: "Full Time",
//     category: "Information Technology",
//     status: "active",
//     posted_date: "Apr 27",
//     company_details:{
//       industry:'Technology',
//       website:'https://tcs.com',
//       about:"This company type is MNC's and give the services of software related to build full flech"
//     }
//   },
// ];
