import { useContext, useEffect, useState } from "react";
import Hearder from "../components/Hearder";
import useCompany from "../hooks/company";
import "../styling/style_ex.css";
import { Briefcase, Edit, EyeIcon, Plus, Trash2Icon, User } from "lucide-react";
import { Link } from "react-router-dom";
import Jobs from "../hooks/jobs";
import { JobdataContext } from "../context/JobContext";
import Footer from "../components/Footer";

function Employer_Dashboard() {
  const { Applications } = useContext(JobdataContext);
  const { getComapanyProfile, data } = useCompany();
  const { activeJobs, dashboardJobs, allApplications } = Jobs();

  useEffect(() => {
    (async () => {
      await getComapanyProfile();
      allApplications();
    })();
  }, []);

  if (data && !dashboardJobs) {
    activeJobs(data._id);
  }

  // console.log(dashboardJobs);
  let active = 0;

  if (dashboardJobs) {
    dashboardJobs?.map((job) => {
      if (job.status === "active") {
        active++;
      }
    });
  }

  return (
    <>
      <Hearder />
      <div>
        <div className="dashboard-container">
          <div className="container">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "2rem",
              }}
            >
              <div>
                <h2
                  style={{ marginBottom: "0px" }}
                  className="font-bold text-[1.5rem] text-[#035f98] "
                >
                  Dashboard
                </h2>
                <p style={{ color: "#777", fontStyle: "normal" }}>
                  Welcome back,{" "}
                  <span className="font-bold  border-dashed border-b text-md tracking-tight text-emerald-950">
                    {data?.company_name}
                    {/* <?php echo htmlspecialchars($company['company_name']); ?> */}
                  </span>
                </p>
              </div>
              <Link to={'/post-job'} className="btn-primary">
                <span className="flex items-center justify-center gap-0.5 font-semibold">
                  <Plus size={20} strokeWidth={3.5} />
                  Post Job
                </span>
              </Link>
            </div>

            <div className="stats-overview">
              <div className="stat-card">
                <div
                  className="stat-icon"
                  style={{ background: "#e0f2fe", color: "#0284c7" }}
                >
                  <Briefcase />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.3rem" }} className="font-bold">
                    {/* <?php echo $jobs->num_rows; ?> */}
                    {/* {dashboardJobs?.length || 0} */}
                    {active || 0}
                    {/* {
                    dashboardJobs?.map((job) => {
                      console.log(job);
                      if (job.status === "active") {
                        return job;
                      }
                    }).length
                  } */}
                  </h3>
                  <span
                    style={{ color: "#666", fontSize: "0.9rem" }}
                    className="font-medium"
                  >
                    Active Jobs
                  </span>
                </div>
              </div>
              <div className="stat-card">
                <div
                  className="stat-icon"
                  style={{ background: "#f0fdf4", color: "#16a34a" }}
                >
                  <User />
                </div>
                <div>
                  <h3
                    style={{ margin: 0, fontSize: "1.3rem" }}
                    className="font-bold"
                  >
                    {/* <?php echo array_sum($app_counts); ?> */}
                    {10}
                  </h3>
                  <span
                    style={{ color: "#666", fontSize: "0.9rem" }}
                    className="font-medium"
                  >
                    Total Applications
                  </span>
                </div>
              </div>
              <div className="stat-card">
                <div
                  className="stat-icon"
                  style={{ background: "#faf5ff", color: "#9333ea" }}
                >
                  <EyeIcon />
                </div>
                <div>
                  <h3
                    style={{ margin: 0, fontSize: "1.3rem" }}
                    className="font-bold"
                  >
                    20
                  </h3>
                  <span
                    style={{ color: "#666", fontSize: "0.9rem" }}
                    className="font-medium"
                  >
                    Total Views
                  </span>
                </div>
              </div>
            </div>

            <div className="dashboard-grid">
              <div className="chart-card">
                <h3
                  style={{
                    marginBottom: "15px",
                    color: "#2c3e50",
                    fontSize: "1.1rem",
                  }}
                  className="font-bold"
                >
                  Applications by Job
                </h3>
                <canvas id="jobChart"></canvas>
              </div>

              <div className="chart-card">
                <h3
                  style={{
                    marginBottom: "15px",
                    color: "#2c3e50",
                    fontSize: "1.1rem",
                  }}
                  className="font-bold"
                >
                  Application Status
                </h3>
                <canvas
                  id="statusChart"
                  style={{ maxHeight: "250px" }}
                ></canvas>
              </div>
            </div>

            <div className="table-container">
              <h3
                style={{
                  marginBottom: "1rem",
                  color: "#2c3e50",
                  paddingLeft: "10px",
                }}
                className="font-bold"
              >
                Recent Job Postings
              </h3>
              <table className="min-w-200">
                <thead>
                  <tr className="text-[0.9rem]">
                    <th>Job Title</th>
                    <th>Posted Date</th>
                    <th>Applications</th>
                    <th>Status</th>
                    <th
                      style={{
                        width: "90%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* <?php
                        $jobs->data_seek(0); // Reset pointer to reuse result
                        if ($jobs->num_rows > 0):
                            while ($job = $jobs->fetch_assoc()):
                        ?> */}
                  {dashboardJobs ? (
                    dashboardJobs.map((job) => (
                      <tr key={job?._id}>
                        <td>
                          <strong className="text-[0.9rem]">
                            {job?.title}
                            {/* <?php echo htmlspecialchars($job['title']); ?> */}
                          </strong>
                        </td>
                        <td className="text-[0.9rem]">
                          {job?.createdAt.split("T")[0]}
                          {/* <?php echo date('M d, Y', strtotime($job['posted_date'])); ?> */}
                        </td>
                        <td>
                          {/* <?php if ($job['app_count'] > 0): ?> */}
                          <span
                            style={{
                              background: "#e0f2fe",
                              color: "#0284c7",
                              padding: "3px 10px",
                              borderRadius: "10px",
                              fontWeight: "bold",
                              fontSize: "0.85rem",
                            }}
                          >
                            {/* <?php echo $job['app_count']; ?> Applicants */}
                          </span>
                          {/* <?php else: ?> */}
                          <span style={{ color: "#999", fontSize: "0.9rem" }}>
                            No applicants
                          </span>
                          {/* <?php endif; ?> */}
                        </td>
                        <td
                          style={{ padding: "0.2rem", fontWeight: 600 }}
                          className="capitalize text-[0.9rem]"
                        >
                          <div className="flex items-center">
                            <span
                              style={{ padding: "0.1rem 0.7rem" }}
                              className={`
                                ${
                                  job?.status === "active"
                                    ? "text-[#2ecc71] bg-green-100 rounded-2xl"
                                    : "text-[#e74c3c] bg-red-100 rounded-2xl"
                                } `}
                            >
                              {job?.status}
                            </span>
                            {/* <?php echo $job['status'] == 'active' ? '#2ecc71' : '#e74c3c'; ?>;  */}
                            {/* <?php echo ucfirst($job['status']); ?> */}
                          </div>
                        </td>
                        <td
                          style={{
                            width: "85%",
                            display: "flex",
                            justifyContent: "end",
                            alignItems: "center",
                          }}
                        >
                          <a
                            href="view-applications.php?job_id=<?php echo $job['id']; ?>"
                            className="btn-secondary"
                            style={{ padding: "5px 15px", fontSize: "0.85rem" }}
                          >
                            View Apps
                          </a>
                          <a
                            href="edit-job.php?id=<?php echo $job['id']; ?>"
                            style={{ marginLeft: "10px", color: "#667eea" }}
                          >
                            <Edit
                              size={17}
                              className="hover:scale-120 transition-all "
                            />
                            {/* <i className="fas fa-edit"></i> */}
                          </a>
                          <a
                            href="?delete_id=<?php echo $job['id']; ?>"
                            // onclick="return confirm('Are you sure you want to Delete this job? All applications for this job will also be remove.');"
                            style={{
                              color: "black",
                              padding: "5px 10px",
                              borderRadius: "4px",
                              textDecoration: "none",
                            }}
                          >
                            <Trash2Icon
                              size={17}
                              color="#e74c3c"
                              className="hover:scale-120 transition-all"
                            />
                          </a>
                        </td>
                      </tr>
                    ))
                  ) : (
                    // {/* <?php endwhile; */}
                    // {/* else: ?> */}
                    <tr>
                      <td
                        colSpan="5"
                        style={{
                          textAlign: "center",
                          padding: "30px",
                          color: "#cd1111",
                        }}
                        className="font-semibold"
                      >
                        You haven't posted any jobs yet.
                      </td>
                    </tr>
                  )}

                  {/* <?php endif; ?> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Employer_Dashboard;
