// import "../styling/style_ex.css";
import { Link, useParams } from "react-router-dom";
import Hearder from "../components/Hearder";
import { useContext, useState } from "react";
import { JobdataContext } from "../context/JobContext";
import {
  RiAndroidLine,
  RiLinkedinFill,
  RiTwitterXFill,
  RiWhatsappLine,
} from "@remixicon/react";
import Footer from "../components/Footer";
import { UserDataContext } from "../context/UserContext";
import { formatDate } from "../utils/utils";
import Jobs from "../hooks/jobs";
import api from "../lib/api";

function JobDetails() {
  const { id } = useParams();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [alreadyApply, setAlreadyApplied] = useState(false);
  const [cover_letter, setCover_letter] = useState("");
  const { applyJob } = Jobs();

  const { jobs, loadingJobs } = useContext(JobdataContext);
  const { user } = useContext(UserDataContext);

  if (loadingJobs) {
    return (
      <>
        <Hearder />
        <div className="h-screen flex justify-center items-center text-xl font-bold">
          Loading Job details...
        </div>
      </>
    );
  }
  const job = jobs.find((j) => j._id === id);
  if (!job) {
    return (
      <>
        <div className="flex h-screen justify-center items-center text-red-500 text-xl font-bold">
          Job not found!
        </div>
      </>
    );
  }

  const handleApplication = async (e) => {
    e.preventDefault();
    const data = {
      job_id: job._id,
      cover_letter,
    };
    await applyJob(data);
    await alreadyApplied();
  };

  const alreadyApplied = async () => {
    try {
      const { data } = await api.get(
        `/api/v1/application/me-applied/${job._id}`
      );
      // console.log(data);
      if (data.success) {
        setSuccess(true);
      }
    } catch (error) {
      console.log(error.response);
    }
  };
  alreadyApplied();
  return (
    <div>
      <Hearder />

      <section style={{ padding: "3rem 0" }}>
        <div className="container">
          <div
            style={{
              background: "white",
              padding: "2rem",
              borderRadius: "10px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <div className="job-header">
              <h1 className="sm:text-3xl text-2xl font-bold">
                {/* <?php echo htmlspecialchars($job['title']), ?> */}
                {job.title}
              </h1>
              <span className="job-type">
                {/* <?php echo htmlspecialchars($job['job_type']), ?> */}
                {job.job_type}
              </span>
            </div>

            <div style={{ margin: "0rem 0" }}>
              <h2
                style={{ color: "#3498db", marginBottom: "1rem" }}
                className="text-md "
              >
                <a
                  href="company.php?id=<?php echo $job['company_id'], ?>"
                  style={{ textDecoration: "underline" }}
                  className="hover"
                >
                  {/* <?php echo htmlspecialchars($job['company_name']), ?> */}
                  {job?.company_detail?.company_name}
                </a>
              </h2>
              <div className="job-details">
                <span>
                  📍
                  {/* <?php echo htmlspecialchars($job['location']), ?> */}
                  {job.location}
                </span>
                <span>
                  💰
                  {/* <?php echo htmlspecialchars($job['salary_range']), ?> */}
                  {job.salary_range}
                </span>
                <span>
                  📂
                  {/* <?php echo htmlspecialchars($job['category']), ?> */}
                  {job.category}
                </span>
                <span>
                  📅 Posted:
                  {/* <?php echo date('M d, Y', strtotime($job['posted_date'])), ?> */}
                  {" " + formatDate(job.createdAt)}
                  {/* {" " + job.createdAt} */}
                </span>
              </div>
            </div>

            <hr style={{ margin: "2rem 0" }} />

            <div style={{ marginBottom: "2rem" }}>
              <h3 className="font-bold sm:text-lg">Job Description</h3>
              <p style={{ lineHeight: 1.8, color: "#555" }}>
                {/* <?php echo nl2br(htmlspecialchars($job['description'])), ?> */}
                {job?.description}
              </p>
            </div>

            {/* <?php if ($job['requirements']): ?> */}
            <div style={{ marginBottom: "2rem" }}>
              <h3 className="font-bold sm:text-lg">Requirements</h3>
              <p style={{ lineHeight: 1.8, color: "#555" }}>
                {/* <?php echo nl2br(htmlspecialchars($job['requirements'])), ?> */}
                {job.requirements}
              </p>
            </div>
            {/* <?php endif, ?> */}

            <div style={{ marginBottom: "2rem" }}>
              <h3 className="font-bold sm:text-lg">About Company</h3>
              <p style={{ lineHeight: 1.8, color: "#555" }}>
                {/* <?php echo nl2br(htmlspecialchars($job['company_description'] ?? 'No description available.')), ?> */}
                {job.company_detail.description}
              </p>
              {/* <?php if ($job['industry']): ?> */}
              <p>
                <strong className="sm:text-lg">Industry:</strong>
                {" " + job.company_detail.industry}
                {/* <?php echo htmlspecialchars($job['industry']), ?> */}
              </p>
              {/* <?php endif, ?>
                    <?php if ($job['website']): ?> */}
              <p>
                <strong className="sm:text-lg">Website:</strong>
                <a href={job.company_detail.website} target="_blank">
                  {" " + job.company_detail.website}
                  {/* <?php echo htmlspecialchars($job['website']), ?> */}
                </a>
              </p>
              {/* <?php endif, ?> */}
            </div>

            {/* <?php if (isLoggedIn() && isJobSeeker()): ?> */}
            {user ? (
              <>
                <hr style={{ margin: "2rem 0" }} />
                {/* <?php if ($error): ?> */}
                {error ? (
                  <div className="error">{/* <?php echo $error, ?> */} </div>
                ) : (
                  ""
                )}
                {/* <?php endif, ?> */}
                {/* <?php if ($success): ?> */}
                {success && (
                  <div className="success">
                    {/* <?php echo $success, ?> */}You have already applied for
                    this job !
                  </div>
                )}
                {/* <?php else: ?> */}
                {user.role === "seeker" ? (
                  <div
                    className="form-container"
                    style={{ margin: 0, boxShadow: "none" }}
                  >
                    <strong
                      style={{
                        display: `${success ? "none" : "block"}`,
                      }}
                      className="sm:text-lg"
                    >
                      Apply for this Position
                    </strong>
                    <form
                      style={{
                        display: `${success ? "none" : "block"}`,
                      }}
                      onSubmit={(e) => handleApplication(e)}
                    >
                      <div className="">
                        <div className="font-normal text-lg">
                          <label>Cover Letter:</label>
                        </div>
                        <textarea
                          name="cover_letter"
                          rows="6"
                          placeholder="Tell us why you're a great fit for this role..."
                          required
                          value={cover_letter}
                          onChange={(e) => setCover_letter(e.target.value)}
                          // className="w-1/2"
                          style={{
                            //   minWidth: "100%",
                            padding: "1rem",
                            // border: "2px solid #e5e7e9",
                            // borderRadius: "1rem",
                            // fontSize: "1rem",
                            //   background: "#f8fbff",
                            margin: "1rem 0",
                          }}
                          className="w-full border-[#e5e7e9] border-2 rounded-xl text-[1.1rem] bg-[#f8fbff]  md:w-[55%]"
                        ></textarea>
                      </div>
                      <div className="flex justify-center items-center text-center md:justify-start">
                        <button
                          type="submit"
                          className="btn-primary text-[.9rem] h-12 w-60 sm:text-[1.1rem] sm:w-65"
                        >
                          Submit Application
                        </button>
                      </div>
                    </form>
                    <div
                      className="form-container"
                      style={{ margin: 0, boxShadow: "none" }}
                    >
                      <div
                        style={{
                          marginTop: "2rem",
                          paddingTop: "1.5rem",
                          borderTop: "1px solid #2222",
                        }}
                      >
                        <p
                          style={{
                            fontWeight: 600,
                            color: "#2c3e50",
                            marginBottom: "1rem",
                          }}
                          className="text-center md:text-start"
                        >
                          Share this job:
                        </p>

                        <div
                          style={{
                            display: "flex",
                            gap: "10px",
                            marginBottom: "1rem",
                          }}
                          className="flex justify-center md:justify-start "
                        >
                          <a
                            href="https://wa.me/?text=<?php echo $share_text . ' ' . $share_link, ?>"
                            target="_blank"
                            style={{
                              background: "#25D366",
                              color: "white",
                              width: "40px",
                              height: "40px",
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "1.2rem",
                              transition: "transform 0.2s",
                            }}
                          >
                            {/* <i className="fab fa-whatsapp"></i> */}
                            <RiWhatsappLine />
                          </a>

                          <a
                            href="https://www.linkedin.com/sharing/share-offsite/?url=<?php echo $share_link, ?>"
                            target="_blank"
                            style={{
                              background: "#0077b5",
                              color: "white",
                              width: "40px",
                              height: "40px",
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "1.2rem",
                              transition: "transform 0.2s",
                            }}
                          >
                            {/* <i className="fab fa-linkedin-in"></i> */}
                            <RiLinkedinFill />
                          </a>

                          <a
                            href="https://twitter.com/intent/tweet?text=<?php echo $share_text, ?>&url=<?php echo $share_link, ?>"
                            target="_blank"
                            style={{
                              background: "#000",
                              color: "white",
                              width: "40px",
                              height: " 40px",
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "1rem",
                              transition: "transform 0.2s",
                            }}
                          >
                            {/* <i className="fab fa-twitter"></i> */}
                            <RiTwitterXFill />
                          </a>

                          <a
                            href="mailto:?subject=Job Opportunity: <?php echo htmlspecialchars($job['title']), ?>&body=<?php echo $share_text . ' ' . $share_link, ?>"
                            style={{
                              background: "#ea4335",
                              color: "white",
                              width: "40px",
                              height: "40px",
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "1rem",
                              transition: "transform 0.2s",
                            }}
                          >
                            <i className="fas fa-envelope"></i>
                            <RiAndroidLine />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className="form-container"
                    style={{ margin: 0, boxShadow: "none" }}
                  >
                    <div
                      style={{
                        marginTop: "-2rem",
                        paddingTop: "1.5rem",
                        // borderTop: "1px solid #2222",
                      }}
                    >
                      <p
                        style={{
                          fontWeight: 600,
                          color: "#2c3e50",
                          marginBottom: "1rem",
                        }}
                        className="text-center md:text-start"
                      >
                        Share this job:
                      </p>

                      <div
                        style={{
                          display: "flex",
                          gap: "10px",
                          marginBottom: "1rem",
                        }}
                        className="flex justify-center md:justify-start "
                      >
                        <a
                          href="https://wa.me/?text=<?php echo $share_text . ' ' . $share_link, ?>"
                          target="_blank"
                          style={{
                            background: "#25D366",
                            color: "white",
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "1.2rem",
                            transition: "transform 0.2s",
                          }}
                        >
                          {/* <i className="fab fa-whatsapp"></i> */}
                          <RiWhatsappLine />
                        </a>

                        <a
                          href="https://www.linkedin.com/sharing/share-offsite/?url=<?php echo $share_link, ?>"
                          target="_blank"
                          style={{
                            background: "#0077b5",
                            color: "white",
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "1.2rem",
                            transition: "transform 0.2s",
                          }}
                        >
                          {/* <i className="fab fa-linkedin-in"></i> */}
                          <RiLinkedinFill />
                        </a>

                        <a
                          href="https://twitter.com/intent/tweet?text=<?php echo $share_text, ?>&url=<?php echo $share_link, ?>"
                          target="_blank"
                          style={{
                            background: "#000",
                            color: "white",
                            width: "40px",
                            height: " 40px",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "1rem",
                            transition: "transform 0.2s",
                          }}
                        >
                          {/* <i className="fab fa-twitter"></i> */}
                          <RiTwitterXFill />
                        </a>

                        <a
                          href="mailto:?subject=Job Opportunity: <?php echo htmlspecialchars($job['title']), ?>&body=<?php echo $share_text . ' ' . $share_link, ?>"
                          style={{
                            background: "#ea4335",
                            color: "white",
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "1rem",
                            transition: "transform 0.2s",
                          }}
                        >
                          <i className="fas fa-envelope"></i>
                          <RiAndroidLine />
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </>
            ) : (
              // {/* <?php endif, ?>
              //     <?php elseif (!isLoggedIn()): ?> */}
              <>
                <hr style={{ margin: "2rem 0" }} />
                <p
                  style={{
                    textAlign: "center",
                    padding: "2rem",
                    background: "#f8f9fa",
                    borderRadius: "5px",
                  }}
                >
                  <Link
                    to={"/signIn"}
                    className="btn-primary text-sm text-center relative"
                  >
                    Login to Apply
                  </Link>
                </p>

                <div
                  className="form-container"
                  style={{ margin: 0, boxShadow: "none" }}
                >
                  <div
                    style={{
                      marginTop: "2rem",
                      paddingTop: "1.5rem",
                      // borderTop: "1px solid #2222",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: 600,
                        color: "#2c3e50",
                        marginBottom: "1rem",
                      }}
                      className="text-center md:text-start"
                    >
                      Share this job:
                    </p>

                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                        marginBottom: "1rem",
                      }}
                      className="flex justify-center md:justify-start "
                    >
                      <a
                        href="https://wa.me/?text=<?php echo $share_text . ' ' . $share_link, ?>"
                        target="_blank"
                        style={{
                          background: "#25D366",
                          color: "white",
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "1.2rem",
                          transition: "transform 0.2s",
                        }}
                      >
                        {/* <i className="fab fa-whatsapp"></i> */}
                        <RiWhatsappLine />
                      </a>

                      <a
                        href="https://www.linkedin.com/sharing/share-offsite/?url=<?php echo $share_link, ?>"
                        target="_blank"
                        style={{
                          background: "#0077b5",
                          color: "white",
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "1.2rem",
                          transition: "transform 0.2s",
                        }}
                      >
                        {/* <i className="fab fa-linkedin-in"></i> */}
                        <RiLinkedinFill />
                      </a>

                      <a
                        href="https://twitter.com/intent/tweet?text=<?php echo $share_text, ?>&url=<?php echo $share_link, ?>"
                        target="_blank"
                        style={{
                          background: "#000",
                          color: "white",
                          width: "40px",
                          height: " 40px",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "1rem",
                          transition: "transform 0.2s",
                        }}
                      >
                        {/* <i className="fab fa-twitter"></i> */}
                        <RiTwitterXFill />
                      </a>

                      <a
                        href="mailto:?subject=Job Opportunity: <?php echo htmlspecialchars($job['title']), ?>&body=<?php echo $share_text . ' ' . $share_link, ?>"
                        style={{
                          background: "#ea4335",
                          color: "white",
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "1rem",
                          transition: "transform 0.2s",
                        }}
                      >
                        <i className="fas fa-envelope"></i>
                        <RiAndroidLine />
                      </a>
                    </div>
                  </div>
                </div>
              </>
            )}
            {/* <?php endif, ?> */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default JobDetails;
