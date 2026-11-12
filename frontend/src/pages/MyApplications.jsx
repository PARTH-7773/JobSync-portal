import { useContext, useState } from "react";
import { JobdataContext } from "../context/JobContext";
import Hearder from "../components/Hearder";
import { MapPin } from "lucide-react";
import { RiMoneyCnyBoxFill } from "@remixicon/react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Jobs from "../hooks/jobs";

function MyApplications() {
  // const [myApplications, setMyApplications] = useState(true);
  const { getAllApplication } = Jobs();
  const { seekerJobApplications } = useContext(JobdataContext);

  // console.log(jobApplications);

  if (!seekerJobApplications) {
    (async () => {
      await getAllApplication();
    })();
  }
  //   const checkStatus = () => {
  //     if (status === "pending") {
  //       return "pending";
  //     } else if (status === "reviewed") {
  //       return "reviewed";
  //     } else if (status === "accepted") {
  //       return "accepted";
  //     } else if (status === "rejected") {
  //       return "rejected";
  //     } else {
  //       return "reviewed";
  //     }
  //   };

  return (
    <div>
      <Hearder />
      <section>
        <div className="dashboard-container">
          <div className="container">
            <h2
              style={{
                color: "#2c3e50",
                fontSize: "1.8rem",
                marginBottom: "0.5rem",
              }}
              className="font-bold"
            >
              My Applications
            </h2>
            <p style={{ color: "#666" }}>
              Track the status of your job applications
            </p>
            {/* <?php if ($applications->num_rows > 0): ?> */}
            <div className="app-grid">
              {seekerJobApplications &&
                seekerJobApplications.map((job) => (
                  <div key={job._id}>
                    {/* {console.log(job)} */}
                    {/* <?php while($app = $applications->fetch_assoc()): ?> */}
                    <div className="app-card">
                      <div className="app-header-bg">
                        <span
                          className={`status-pill  
                        status-${job?.status}
                        `}
                        >
                          {/* status-<?php echo $app['status']; ?> */}
                          {/* <?php echo ucfirst($app['status']); ?> */}
                          {job?.status}
                        </span>
                      </div>

                      <div className="app-body">
                        <div className="app-company-logo">
                          {/* <?php if ($app['logo']): ?> */}
                          <img
                            src="uploads/<?php echo htmlspecialchars($app['logo']); ?>"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              borderRadius: "12px",
                            }}
                          />
                          {/* <?php else: ?> */}
                          <i className="fas fa-building"></i>
                          {/* <?php endif; ?> */}
                        </div>

                        <h3
                          style={{
                            marginBottom: "5px",
                            color: "#2c3e50",
                            //   fontSize: "1.2rem",
                          }}
                          className="font-bold text-xl"
                        >
                          {/* <?php echo htmlspecialchars($app['title']); ?> */}
                          {job?.job_detail?.title}
                        </h3>
                        <div
                          style={{
                            color: "#667eea",
                            fontWeight: 600,
                            fontSize: "0.95rem",
                            marginBottom: "10px",
                          }}
                        >
                          {/* <?php echo htmlspecialchars($app['company_name']); ?> */}
                          {job?.job_detail?.company_detail?.company_name}
                        </div>

                        <div
                          className="job-details font-normal"
                          style={{ display: "block", marginBottom: 0 }}
                        >
                          <span>
                            {/* <i className="fas fa-map-marker-alt"></i> */}
                            {/* <?php echo htmlspecialchars($app['location']); ?> */}
                            <div className="flex items-center gap-1">
                              <MapPin size={15} />
                              {job?.job_detail?.location.length > 15
                                ? job?.job_detail?.location?.slice(0, 15) +
                                  "..."
                                : job?.job_detail?.location}
                            </div>
                          </span>
                          <span>
                            {/* <i className="fas fa-money-bill-wave"></i> */}
                            <div className="flex items-center gap-1 ">
                              <RiMoneyCnyBoxFill size={15} />
                              {/* <?php echo htmlspecialchars($app['salary_range']); ?> */}
                              {job?.job_detail?.salary_range}
                            </div>
                          </span>
                        </div>

                        <div className="app-meta">
                          <span>
                            Applied:{" "}
                            {/* <?php echo date('M d, Y', strtotime($app['applied_date'])); ?> */}
                            {job?.applied_date.split("T")[0]}
                          </span>
                          <Link
                            to={`/job-details/${job?.job_id}`}
                            style={{ color: "#3498db", fontWeight: 500 }}
                          >
                            View Job
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* <?php endwhile; ?> */}
                  </div>
                ))}
            </div>
            {/* ) : ( */}
            {/* <?php else: ?> */}

            {!seekerJobApplications && (
              <div
                style={{
                  background: "white",
                  padding: "4rem",
                  textAlign: "center",
                  borderRadius: "15px",
                  marginTop: "2rem",
                  boxShadow: "0 5px 20px rgba(0,0,0,0.05)",
                }}
              >
                <div
                  style={{
                    fontSize: "4rem",
                    color: "#e0e6ff",
                    marginBottom: "1rem",
                  }}
                >
                  <i className="fas fa-file-contract"></i>
                </div>
                <h3
                  className="font-bold"
                  style={{ color: "#2c3e50", marginBottom: "0.3rem" }}
                >
                  No Applications Yet
                </h3>
                <p style={{ color: "#666", marginBottom: "2rem" }}>
                  You haven't applied to any jobs yet. Start exploring
                  opportunities!
                </p>
                <Link to={"/browse-job"} className="btn-primary">
                  Browse Jobs
                </Link>
              </div>
            )}
            {/* )} */}
            {/* <?php endif; ?> */}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default MyApplications;
