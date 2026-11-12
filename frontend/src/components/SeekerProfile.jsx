import { Eye } from "lucide-react";
import Hearder from "../components/Hearder";
// import "../styling/style_ex.css";
import { useContext, useState } from "react";
import { UserDataContext } from "../context/UserContext";
function SeekerProfile() {
  //   $bar_color = $score < 50 ? "#ff6b6b" : $score < 80 ? "#feca57" : "#1dd1a1";
//   $score = 0;
//   if (!empty($profile["phone"])) $score += 20;
//   if (!empty($profile["skills"])) $score += 20;
//   if (!empty($profile["resume"])) $score += 20;
//   if (!empty($profile["education"])) $score += 20;
//   if (!empty($profile["experience"])) $score += 20;

const [messgage, setMessgage] = useState(true)

const {user} = useContext(UserDataContext)
// console.log(user)

function haldleProfile() {
  console.log('hello parth solanki')
}


  return (
    <>
        <Hearder/>
      <div className="profile-wrapper">
        <div className="profile-header-card">
          <div className="user-info">
            <h2>
              {/* <?php echo htmlspecialchars($profile['full_name']); ?> */}PARTH SOLANKI
            </h2>
            <p>
              <i className="fas fa-envelope" style={{ opacity: 0.7 }}></i>
              {/* <?php echo htmlspecialchars($profile['email']); ?> */}parthcoder7773@gmail.com
            </p>
          </div>
          <div className="header-actions">
            {/* <?php if ($profile['resume']): ?> */}
            <a
              href="resume.php?id=<?php echo $user_id; ?>"
              target="_blank"
              className="btn-glass"
            >
              {/* <i className="fas fa-eye"></i> */}<Eye/>
               View Web Resume
            </a>
            {/* <?php endif; ?> */}
          </div>
        </div>

        <div className="profile-form-card">
          {/* <?php if ($msg): ?> */}
          <div
            className={`alert alert-${messgage ? 'success' : 'error'}`}
            
            // alert-<?php echo $msg_type; ?>
            
            style={{ marginBottom: "2rem" }}
          >
            {/* <?php if ($msg_type == 'success') echo '<i className="fas fa-check-circle"></i>'; */}
            {/* else echo '<i className="fas fa-exclamation-circle"></i>'; ?> */}
            {/* <?php echo $msg; ?> */}message
          </div>
          {/* <?php endif; ?> */}

          <div className="completeness-section">
            <div className="progress-label">
              <span>Profile Strength</span>
              <span
              //   style={{color: <?php echo $bar_color; ?>}}
              >
                {/* <?php echo $score; ?> */}%
              </span>
            </div>
            <div className="progress-track">
              <div className="progress-fill"></div>
            </div>
            {/* <?php if ($score < 100): ?> */}
            <p style={{ fontSize: "0.85rem", color: "#888", marginTop: "8px" }}>
              <i className="fas fa-info-circle"></i> Complete your
              <strong>Skills</strong> and <strong>Resume</strong> to get noticed
              by more employers.
            </p>
            {/* <?php endif; ?> */}
          </div>

          <form onSubmit={haldleProfile}>
            <h3
              style={{
                color: "#2d3748",
                marginBottom: "1.5rem",
                borderBottom: "2px solid #f1f5f9",
                paddingBottom: "10px",
              }}
            >
              <i
                className="fas fa-user-circle"
                style={{ color: "#667eea", marginRight: "10px" }}
              ></i>
              Personal Details
            </h3>

            <div className="grid-2">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="full_name"
                  className=" "
                  // value="<?php echo htmlspecialchars($profile['full_name']); ?>"
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  className=""
                  placeholder="+1 (555) 000-0000"
                  // value="<?php echo htmlspecialchars($profile['phone']); ?>"
                />
              </div>
            </div>

            <div className="form-group" style={{ marginBottom: "2rem" }}>
              <label>Resume / CV</label>
              <div className="grid-2" style={{ alignItems: "center" }}>
                <div className="file-upload-box">
                  <i className="fas fa-cloud-upload-alt upload-icon"></i>
                  <p style={{ margin: 0, color: "#666", fontSize: "0.9rem" }}>
                    Click to upload PDF or DOCX
                  </p>
                  <input type="file" name="resume" accept=".pdf,.doc,.docx" />
                </div>
                {/* <?php if ($profile['resume']): ?> */}
                <div
                  style={{
                    background: "#f0fff4",
                    border: "1px solid #c6f6d5",
                    padding: "15px",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <i
                    className="fas fa-file-pdf"
                    style={{ color: "#e74c3c", fontSize: "1.5rem" }}
                  ></i>
                  <div>
                    <strong
                      style={{
                        display: "block",
                        color: "#2f855a",
                        fontSize: "0.9rem",
                      }}
                    >
                      Resume Uploaded
                    </strong>
                    <a
                      href="uploads/resumes/<?php echo htmlspecialchars($profile['resume']); ?>"
                      target="_blank"
                      style={{
                        fontSize: "0.85rem",
                        color: "#2f855a",
                        textDecoration: "underline",
                      }}
                    >
                      Download Current
                    </a>
                  </div>
                </div>
                {/* <?php endif; ?> */}
              </div>
            </div>

            <h3
              style={{
                color: "#2d3748",
                marginBottom: "1.5rem",
                marginTop: "3rem",
                borderBottom: "2px solid #f1f5f9",
                paddingBottom: "10px",
              }}
            >
              <i
                className="fas fa-briefcase"
                style={{ color: "#667eea", marginRight: "10px" }}
              ></i>{" "}
              Professional Info
            </h3>

            <div className="form-group" style={{ marginBottom: "1.5rem" }}>
              <label>
                Key Skills{" "}
                <span style={{ fontWeight: 400, color: "#999" }}>
                  (Comma separated)
                </span>
              </label>
              <input
                type="text"
                name="skills"
                className="form-control"
                placeholder="e.g. React, Node.js, Python, Design"
                value="<?php echo htmlspecialchars($profile['skills']); ?>"
              />
            </div>

            <div className="grid-2">
              <div className="form-group ">
                <label>Education History</label>
                <textarea
                  name="education"
                  className=""
                  placeholder="Degree, University, Year..."
                >
                  {/* <?php echo htmlspecialchars($profile['education']); ?> */}
                </textarea>
              </div>
              <div className="form-group">
                <label>Work Experience</label>
                <textarea
                  name="experience"
                  className=""
                  placeholder="Job Title, Company, Duration..."
                >
                  {/* <?php echo htmlspecialchars($profile['experience']); ?> */}
                </textarea>
              </div>
            </div>

            <div style={{ textAlign: "right", marginTop: "2rem" }}>
              <button
                type="submit"
                className="btn-primary"
                style={{
                  padding: "14px 40px",
                  fontSize: "1.1rem",
                  borderRadius: "50px",
                  boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
                }}
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SeekerProfile;
