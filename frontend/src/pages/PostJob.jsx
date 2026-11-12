import { useState } from "react";
import Hearder from "../components/Hearder";
import { BriefcaseBusiness } from "lucide-react";

import Jobs from "../hooks/jobs";
import { Link, useNavigate } from "react-router-dom";

function PostJob() {
  const { createJob, success, error } = Jobs();
  const [title, setTitle] = useState("");
  const [jobType, setJobType] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title,
      description,
      requirements,
      location,
      salary_range: salary,
      job_type: jobType,
      category: category.toLowerCase(),
    };

    // console.log(data);

    const res = await createJob(data);
    if (res.success) {
      navigate("/employer-dashboard", { replace: true });
    }
  };

  return (
    <>
      <Hearder />
      <div className="dashboard-container">
        <div className="modern-card">
          <div className="card-header-modern">
            <h2 className="font-bold">
              <BriefcaseBusiness strokeWidth={2.5} color="#667eea" />
              {/* <i className="fas fa-briefcase" style={{ color: "#667eea" }}></i>{" "} */}
              Post a New Job
            </h2>
            <Link to={'/employer-dashboard'} className="btn-secondary">
              <i className="fas fa-arrow-left"></i> Back to Dashboard
            </Link>
          </div>

          <div className="card-body-modern">
            {/* <?php if ($error): ?> */}
            {error ? (
              <div className="alert alert-error">
                <i className="fas fa-exclamation-circle"></i>
                {/* <?php echo $error; ?> */}
                {error}
              </div>
            ) : (
              ""
            )}

            {/* <?php endif; ?> */}

            {/* <?php if ($success): ?> */}
            {success ? (
              <div className="alert alert-success">
                <i className="fas fa-check-circle"></i>
                {/* <?php echo $success; ?> */}
                {success}
                <div style={{ marginTop: "10px" }}>
                  <a
                    href="employer-dashboard.php"
                    style={{ textDecoration: "underline", fontWeight: 600 }}
                  >
                    View on Dashboard
                  </a>
                </div>
              </div>
            ) : (
              ""
            )}

            {/* <?php endif; ?> */}

            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="form-row">
                <div className="input-group">
                  <label
                    style={{
                      fontWeight: 600,
                      marginBottom: "5px",
                      display: "block",
                    }}
                  >
                    Job Title *
                  </label>
                  <div style={{ position: "relative" }}>
                    <input
                      type="text"
                      name="title"
                      placeholder="e.g. Senior Software Engineer"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
                    <i className="fas fa-heading"></i>
                  </div>
                </div>

                <div className="input-group">
                  <label
                    style={{
                      fontWeight: 600,
                      marginBottom: "5px",
                      display: "block",
                    }}
                  >
                    Job Type *
                  </label>
                  <div style={{ position: "relative" }}>
                    <select
                      name="job_type"
                      required
                      value={jobType}
                      onChange={(e) => setJobType(e.target.value)}
                    >
                      <option value="">Select Job type...</option>
                      <option value="internship">Internship</option>
                      <option value="full-time">Full-time</option>
                      <option value="part-time">Part-time</option>
                      <option value="contract">Contract</option>
                    </select>
                    <i className="fas fa-clock"></i>
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="input-group">
                  <label
                    style={{
                      fontWeight: 600,
                      marginBottom: "5px",
                      display: "block",
                    }}
                  >
                    Category *
                  </label>
                  <div style={{ position: "relative" }}>
                    <select
                      name="category"
                      required
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option value="">Select Category...</option>
                      <option value="Technology">Technology</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Finance">Finance</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Sales">Sales</option>
                      <option value="Education">Education</option>
                      <option value="Engineering">Engineering</option>
                    </select>
                    <i className="fas fa-folder"></i>
                  </div>
                </div>

                <div className="input-group">
                  <label
                    style={{
                      fontWeight: 600,
                      marginBottom: "5px",
                      display: "block",
                    }}
                  >
                    Location *
                  </label>
                  <div style={{ position: "relative" }}>
                    <input
                      type="text"
                      name="location"
                      placeholder="e.g. New York, NY (or Remote)"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      required
                    />
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                </div>
              </div>

              <div className="input-group" style={{ maxWidth: "50%" }}>
                <label
                  style={{
                    fontWeight: 600,
                    marginBottom: "5px",
                    display: "block",
                  }}
                >
                  Salary Range
                </label>
                <div style={{ position: "relative" }}>
                  <input
                    type="text"
                    name="salary_range"
                    placeholder="e.g. $60k - $80k / year"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                  />
                  <i className="fas fa-dollar-sign"></i>
                </div>
                <small className="helper-text">Optional but recommended</small>
              </div>

              <hr
                style={{
                  border: 0,
                  borderTop: "1px solid #eee",
                  margin: "2rem 0",
                }}
              />

              <div className="">
                <label
                  style={{
                    fontWeight: 600,
                    marginBottom: "10px",
                    display: "block",
                  }}
                >
                  Job Description *
                </label>
                <textarea
                  name="description"
                  rows="6"
                  placeholder="Describe the role, responsibilities, and company culture..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  style={{
                    width: "100%",
                    padding: "15px",
                    border: "2px solid #ccc",
                    borderRadius: "8px",
                  }}
                ></textarea>
              </div>

              <div className="" style={{ marginTop: "1.5rem" }}>
                <label
                  style={{
                    fontWeight: 600,
                    marginBottom: "10px",
                    display: "block",
                  }}
                >
                  Requirements
                </label>
                <textarea
                  name="requirements"
                  rows="6"
                  placeholder="List skills, education, and experience needed..."
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "15px",
                    border: "2px solid #ccc",
                    borderRadius: "8px",
                  }}
                ></textarea>
              </div>

              <div style={{ marginTop: "2rem", textAlign: "right" }}>
                <button
                  type="submit"
                  className="btn-primary"
                  style={{
                    padding: "12px 30px",
                    fontSize: "1rem",
                    borderRadius: "8px",
                  }}
                >
                  <i
                    className="fas fa-paper-plane"
                    style={{ marginRight: "8px" }}
                  ></i>{" "}
                  Publish Job
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostJob;
