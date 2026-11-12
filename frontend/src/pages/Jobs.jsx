import { BriefcaseBusiness, Clock, Filter, Heart, Search } from "lucide-react";
import Hearder from "../components/Hearder";
// import "../styling/style_ex.css";
import { RiMapPinFill, RiMoneyCnyBoxLine } from "@remixicon/react";
import { useContext, useState } from "react";
import { JobdataContext } from "../context/JobContext";
import Footer from "../components/Footer";
import { Link, useSearchParams } from "react-router-dom";

function Jobs() {
  const Technology = [
    "Technology",
    "Healthcare",
    "Finance",
    "Marketing",
    "Education",
    "Engineering",
  ];

  const [jobStatus, setJobStatus] = useState(true);

  const [query, setQuery] = useSearchParams();
  const selectedCategory = query.get("category");

  const { browseAllJobs, loadingJobs, setLoading } = useContext(JobdataContext);

  const reletedjobs = selectedCategory
    ? browseAllJobs.filter(
        (i) => i.category.toLowerCase() === selectedCategory.toLowerCase()
      )
    : browseAllJobs;

  return (
    <>
      <div>
        <Hearder />

        <div className="container browse-container">
          <aside className="filter-sidebar">
            <h3
              style={{
                marginBottom: "1.5rem",
                paddingBottom: "0.5rem",
                borderBottom: "2px solid #f0f2f5",
                fontFamily: "system-ui",
              }}
              className="font-bold text-xl flex items-center"
            >
              {/* <i className="fas fa-filter" style="color: #667eea; margin-right: 8px;"></i> */}
              <Filter
                size={21}
                style={{ color: "#667eea", marginRight: "8px" }}
              />
              Filters
            </h3>

            <form
            // method="GET" action="jobs.php"
            >
              <div className="filter-group">
                <label>Keywords</label>
                <input
                  type="text"
                  name="search"
                  placeholder="Job title or skill..."
                  // value="<?php echo htmlspecialchars($search); ?>"
                />
              </div>

              <div className="filter-group">
                <label>Category</label>
                <select name="category">
                  <option value="">All Categories</option>
                  {/* <?php $cats = ['Technology', 'Healthcare', 'Finance', 'Marketing', 'Education', 'Engineering']; */}
                  {/* foreach ($cats as $cat): ?> */}

                  {Technology.map((t, i) => {
                    return (
                      <option value={t} key={i}>
                        {t}
                      </option>
                    );
                  })}

                  {/* // value="<?php echo $cat; ?>"
                            //  <?php echo $category === $cat ? 'selected' : ''; ?>><?php echo $cat; ?>
                        <?php endforeach; ?> */}
                </select>
              </div>

              <div className="filter-group">
                <label>Job Type</label>
                <select name="job_type">
                  <option value="">Any Type</option>
                  <option
                    value="full-time"
                    // <?php echo $job_type === 'full-time' ? 'selected' : ''; ?>
                  >
                    Full-time
                  </option>
                  <option
                    value="part-time"
                    // <?php echo $job_type === 'part-time' ? 'selected' : ''; ?>
                  >
                    Part-time
                  </option>
                  <option
                    value="contract"
                    // <?php echo $job_type === 'contract' ? 'selected' : ''; ?>
                  >
                    Contract
                  </option>
                  <option
                    value="internship"
                    // <?php echo $job_type === 'internship' ? 'selected' : ''; ?>
                  >
                    Internship
                  </option>
                </select>
              </div>

              <div className="filter-group">
                <label>Location</label>
                <input
                  type="text"
                  name="location"
                  placeholder="City, State"
                  //   value="<?php echo htmlspecialchars($location); ?>"
                />
              </div>

              <div className="filter-group">
                <label>Sort By</label>
                <select name="sort">
                  <option
                    value="newest"
                    // <?php echo $sort === 'newest' ? 'selected' : ''; ?>
                  >
                    Newest First
                  </option>
                  <option
                    value="oldest"
                    // <?php echo $sort === 'oldest' ? 'selected' : ''; ?>
                  >
                    Oldest First
                  </option>
                  <option
                    value="title"
                    // <?php echo $sort === 'title' ? 'selected' : ''; ?>
                  >
                    Title A-Z
                  </option>
                </select>
              </div>

              <button
                type="submit"
                className="btn-primary text-sm"
                style={{ width: "100%", marginTop: "10px" }}
              >
                Apply Filters
              </button>
              <a
                href="jobs.php"
                className="btn-secondary text-sm"
                style={{
                  display: "block",
                  textAlign: "center",
                  marginTop: "10px",
                  width: "100%",
                }}
              >
                Clear All
              </a>
            </form>
          </aside>

          <main>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "2rem",
              }}
            >
              <h2
                style={{ color: "#2c3e50" }}
                className="text-[1.5rem] font-bold "
              >
                {/* <?php echo $result->num_rows; ?> */}
                <span className="text-[#087279]">
                  ({reletedjobs.length})
                </span>{" "}
                Jobs Found
              </h2>
            </div>

            <div className="jobs-grid" style={{ gridTemplateColumns: "1fr" }}>
              {/* <?php if ($result->num_rows > 0): ?>
                    <?php while ($job = $result->fetch_assoc()): ?> */}
              {reletedjobs.length > 0 ? (
                (() => {
                  return (
                    <>
                      {reletedjobs.map((job) => {
                        return (
                          <div key={job._id} className="job-card relative">
                            {/* <?php if (isLoggedIn() && isJobSeeker() ):
                                $is_saved = in_array($job['id'], $saved_jobs);
                              ?> */}

                            <button
                              className="save-btn absolute right-5 top-6
                                <?php echo $is_saved ? 'active' : ''; ?>
                                "
                              //   onclick="toggleSave(<?php echo $job['id']; ?>, this)"
                              //   title="<?php echo $is_saved ? 'Unsave Job' : 'Save Job'; ?>"
                            >
                              {/* <i className="<?php echo $is_saved ? 'fas' : 'far'; ?> fa-heart"></i> */}
                              <Heart />
                            </button>
                            {/* <?php endif; ?> */}

                            <div
                              style={{
                                display: "flex",
                                gap: "1.5rem",
                                alignItems: "flex-start",
                              }}
                            >
                              {/* <?php if ($job['logo'] && file_exists('uploads/' . $job['logo'])): ?> */}
                              <img
                                src="uploads/<?php echo htmlspecialchars($job['logo']); ?>"
                                alt="Logo"
                                style={{
                                  width: "60px",
                                  height: "60px",
                                  borderRadius: "8px",
                                  objectFit: "cover",
                                  flexShrink: "0",
                                }}
                              />
                              {/* <?php else: ?> */}
                              <div
                                style={{
                                  width: "60px",
                                  height: "60px",
                                  background: "#f8f9fa",
                                  borderRadius: "8px",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  fontSize: "1.5rem",
                                  color: "#cbd5e0",
                                  flexShrink: "0",
                                }}
                              >
                                {/* <i className="fas fa-briefcase"></i> */}
                                <BriefcaseBusiness />
                              </div>
                              {/* <?php endif; ?> */}

                              {/* <!-- /* margin-right: 2rem; */}
                              <div style={{ flexGrow: "1" }}>
                                <div className="job-header">
                                  <h3
                                    style={{ margin: 0, fontSize: "1.2rem" }}
                                    className="font-bold"
                                  >
                                    {/* <?php echo htmlspecialchars($job['title']); ?> */}
                                    {job.title}
                                  </h3>
                                  <span
                                    className="job-type "
                                    style={{ marginRight: "2rem" }}
                                  >
                                    {/* <?php echo htmlspecialchars($job['job_type']); ?> */}
                                    {job.job_type}
                                  </span>
                                </div>

                                <p
                                  style={{
                                    color: "#667eea",
                                    fontWeight: 500,
                                    marginBottom: "0.5rem",
                                  }}
                                >
                                  {/* <?php echo htmlspecialchars($job['company_name']); ?> */}
                                  {job.company_name}
                                </p>

                                <div
                                  className="job-details"
                                  style={{
                                    display: "flex",
                                    gap: "15px",
                                    flexWrap: "wrap",
                                  }}
                                >
                                  <div className="flex items-center justify-center gap-1 text-gray-400 text-[.9rem] ">
                                    <RiMapPinFill size={15} className="" />
                                    <h1>{job.location}</h1>
                                  </div>

                                  <div className="flex items-center justify-center gap-1 text-gray-400 text-[.9rem]">
                                    {/* <i className="fas fa-money-bill-wave"></i> */}
                                    <RiMoneyCnyBoxLine size={15} className="" />
                                    <h1>{job.salary_range}</h1>
                                    {/* <?php echo htmlspecialchars($job['salary_range'] ? $job['salary_range'] : 'Not disclosed'); ?> */}
                                  </div>
                                  <div className="flex items-center justify-center gap-1 text-gray-400 text-[.9rem]">
                                    <Clock size={15} />
                                    <h1>30 June</h1>
                                    {/* <?php echo date('M d', strtotime($job['posted_date'])); ?> */}
                                  </div>
                                </div>

                                <p
                                  style={{
                                    color: "#666",
                                    fontSize: "0.9rem",
                                    marginTop: "0.8rem",
                                    lineHeight: 1.5,
                                  }}
                                >
                                  {job.description}
                                  {/* <?php echo substr(htmlspecialchars($job['description']), 0, 180) . '...'; ?> */}
                                </p>

                                <div style={{ marginTop: "1rem" }}>
                                  <Link
                                    to={`/job-details/${job._id}`}
                                    className="btn-secondary text-xs"
                                    style={{ fontSize: "0.9rem" }}
                                  >
                                    View Details
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </>
                  );
                })()
              ) : (
                // {/* <?php endwhile; ?> */}
                // {/* <?php else: ?> */}

                // {/* <?php endif; ?> */}
                <div
                  style={{
                    background: "white",
                    padding: "4rem",
                    textAlign: "center",
                    borderRadius: "10px",
                    color: "#666",
                  }}
                  className=""
                >
                  {/* <i
                  className="fas fa-search"
                  style={{
                    fontSize: "3rem",
                    color: "#ddd",
                    marginBottom: "1rem",
                  }}
                ></i> */}
                  <div className="flex w-full justify-center items-center">
                    <span>
                      <Search
                        style={{
                          fontSize: "3rem",
                          color: "#bbb",
                          marginBottom: "1rem",
                        }}
                        strokeWidth={3}
                      />
                    </span>
                  </div>
                  <h3 className="font-bold text-xl">No jobs found</h3>
                  <p className="text-[1.2rem] -tracking-tight">
                    Try adjusting your search criteria or clearing filters.
                  </p>
                </div>
              )}
            </div>
          </main>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Jobs;
