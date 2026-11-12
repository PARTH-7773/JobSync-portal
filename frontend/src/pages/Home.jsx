// import "../styling/footer.css";
import {
  ChartLine,
  GraduationCap,
  HourglassIcon,
  LaptopMinimal,
  MoveRight,
  SearchIcon,
} from "lucide-react";
import { RiMapPinFill, RiMoneyCnyCircleLine } from "@remixicon/react";
import { Link } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";
import gsap from "gsap";

import { JobdataContext } from "../context/JobContext";
import Footer from "../components/Footer";
import Hearder from "../components/Hearder";

function Home() {
  // const [jobStatus, setJobStatus] = useState(true);
  const { jobs } = useContext(JobdataContext);
  const hero_title = useRef(null);
  const hero_subtitle = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      hero_title.current,
      {
        opacity: 0,
        y: -20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power1.out",
        delay: 0.4,
      }
    );
    gsap.fromTo(
      hero_subtitle.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power1.out",
        delay: 0.4,
      }
    );
  }, []);

  return (
    <div className="">
      {/* <Hearder /> */}
      {/* <Sidebar/> */}
      <Hearder/>

      <section className="hero-modern">
        <div className="container">
          <h1 ref={hero_title} className="hero-title">
            Find the Job That
            <br />
            Fits Your Life
          </h1>
          <p ref={hero_subtitle} className="hero-subtitle">
            Thousands of jobs in the computer, engineering and technology
            sectors are waiting for you.
          </p>

          <form>
            <div className="search-container-modern text-[#999] relative gap-2">
              <SearchIcon
                strokeWidth={3}
                className=" text-gray-500 absolute top-6.5 left-6.5 w-5 h-6"
              />

              {/* <input type="text" className="search-input text-gray-900 font-medium"
                     placeholder="Job title, keywords, or company..."/> */}
              <input
                type="text"
                placeholder="Job title, keywords, or company..."
                className="search-input w-full pl-10 pr-4  py-3 border border-gray-300 rounded-full focus:outline-none focus:border-8 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder:text-gray-500 placeholder:font-medium"
              />
              <button type="submit" className="btn-primary">
                Search
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="container" style={{ paddingTop: "3rem" }}>
        <h2
          className="text-xl font-extrabold "
          style={{
            textAlign: "center",
            color: "#2c3e50",
            marginBottom: "0.5rem",
          }}
        >
          Popular Categories
        </h2>
        <p style={{ textAlign: "center", color: "#666" }}>
          Explore jobs by industry
        </p>

        <div className="category-grid flex justify-center">
          <Link
            to={"/browse-job?category=technology"}
            className="category-card"
          >
            <div className="cat-icon">
              {/* <i className="fas fa-laptop-code"></i> */}
              <LaptopMinimal strokeWidth={2.5} size={50} />
            </div>
            <h3 className="text-xl font-bold">Technology</h3>
            <span style={{ color: "#999", fontSize: "0.9rem" }}>
              Software, Data, AI
            </span>
          </Link>

          <Link to={"/browse-job?category=finance"} className="category-card">
            <div className="cat-icon">
              <ChartLine strokeWidth={2.5} size={50} />
            </div>
            <h3 className="text-xl font-bold ">Finance</h3>
            <span style={{ color: "#999", fontSize: "0.9rem" }}>
              Accounting, Banks
            </span>
          </Link>

          <Link to={"/browse-job?category=marketing"} className="category-card">
            <div className="cat-icon">
              <i className="fas fa-bullhorn"></i>
              <HourglassIcon strokeWidth={2.5} size={50} />
            </div>
            <h3 className="text-xl font-bold">Marketing</h3>
            <span style={{ color: "#999", fontSize: "0.9rem" }}>
              SEO, Social Media
            </span>
          </Link>

          <Link to={"/browse-job?category=education"} className="category-card">
            <div className="cat-icon">
              <GraduationCap strokeWidth={2.5} size={50} />
            </div>
            <h3 className="text-xl font-bold">Education</h3>
            <span style={{ color: "#999", fontSize: "0.9rem" }}>
              Teaching, Training
            </span>
          </Link>
        </div>
      </section>

      <section style={{ background: "#f8f9fa", padding: "4rem 0" }}>
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "2rem",
            }}
          >
            <div>
              <h2 className="text-lg font-bold text-[#2c3e50]">
                Latest Job Openings
              </h2>
              <p className="text-[#666] font-light">
                Fresh opportunities posted today
              </p>
            </div>
            <Link
              to={"/browse-job"}
              className="flex gap-1"
              style={{ color: "#667eea", fontWeight: 600 }}
            >
              View All Jobs <MoveRight size={25} />
            </Link>
          </div>

          {/* {loadingJobs || !jobs ? (
            <div className="flex justify-center bg-gray-50">
              <span className="text-lg font-semibold text-gray-600 flex gap-1 items-center justify-center">
                <Loader className="h-5 w-5 animate-spin" />
                Loading Jobs....
              </span>
            </div>
          ) : (
            ""
          )} */}

          {jobs ? (
            <div className="jobs-grid">
              {(() => {
                return (
                  <>
                    {jobs.map((job, key) => (
                      // console.log(key);
                      <div key={key}>
                        {/* <?php if ($result->num_rows > 0): ?>
                            <?php while ($job = $result->fetch_assoc()): ?> */}
                        <div className="job-card">
                          <div className="job-header">
                            <h1 className="font-bold text-lg">
                              {/* <?php echo htmlspecialchars($job['title']); ?> */}
                              {job.title}
                            </h1>
                            <span className="job-type">
                              {/* <?php echo htmlspecialchars($job['job_type']); ?> */}
                              {job.job_type}
                            </span>
                          </div>
                          <div className="job-company">
                            <strong>
                              {/* <?php echo htmlspecialchars($job['company_name']); ?> */}
                              {job.company_name}
                            </strong>
                          </div>
                          <div className="job-details">
                            <div className="flex items-center justify-start font-normal">
                              <div className="flex items-center">
                                <RiMapPinFill color="#667eea" size={20} />
                                <i className="fas fa-map-marker-alt"></i>
                                <span className="text-center ">
                                  {/* <?php echo htmlspecialchars($job['location']); ?> */}
                                  {job.location.split(",")[0].length >= 15
                                    ? job.location.slice(0, 15) + "..."
                                    : job.location.split(",")[0]}
                                </span>
                              </div>

                              <div className="flex items-center">
                                <RiMoneyCnyCircleLine
                                  color="#667eea"
                                  size={20}
                                />
                                <i className="fas fa-map-marker-alt"></i>
                                <span>{job.salary_range}</span>
                              </div>
                              {/* <?php echo htmlspecialchars($job['salary_range']); ?> */}
                            </div>
                          </div>
                          <Link
                            to={`/job-details/${job._id}`}
                            // href="job-details.php?id=<?php echo $job['id']; ?>"
                            className="btn-secondary"
                            style={{
                              width: "100%",
                              textAlign: "center",
                              marginTop: "1rem",
                            }}
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    ))}
                  </>
                );
              })()}
            </div>
          ) : (
            <p
              style={{ gridColumn: "1/-1", textAlign: "center" }}
              className="font-bold text-lg"
            >
              No jobs posted yet.
            </p>
          )}
        </div>
      </section>

      <section className="steps-section">
        <div className="container">
          <h2
            style={{
              textAlign: "center",
              marginBottom: "3rem",
              color: "#2c3e50",
            }}
            className="text-xl font-extrabold"
          >
            How It Works
          </h2>

          <div className="steps-grid">
            <div>
              <div className="step-number ">1</div>
              <h3 className="text-lg font-bold">Create Account</h3>
              <p style={{ color: "#666", marginTop: "0.5rem" }}>
                Register as a job seeker to start your journey.
              </p>
            </div>

            <div>
              <div className="step-number">2</div>
              <h3 className="text-lg font-bold">Upload Resume</h3>
              <p style={{ color: "#666", marginTop: "0.5rem" }}>
                Create a profile and upload your CV to get noticed.
              </p>
            </div>

            <div>
              <div className="step-number">3</div>
              <h3 className="text-lg font-bold">Get Hired</h3>
              <p style={{ color: "#666", marginTop: "0.5rem" }}>
                Apply to jobs and track your application status.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
