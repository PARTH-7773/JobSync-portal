import {
  RiFacebookFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiMapPinFill,
  RiPhoneFill,
  RiTwitterFill,
} from "@remixicon/react";
import { Mail } from "lucide-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";

function Footer() {
  const { user } = useContext(UserDataContext);
  return (
    <>
      <footer className="main-footer">
        <div className="container">
          <div className="footer-grid max-lg:w-full max-lg:flex-1 max-lg:flex-col">
            <div className="footer-col">
              <div className="footer-logo">
                <h2 className="font-bold ">
                  Job<span style={{ color: "#3498db" }}>Sync</span>
                </h2>
              </div>
              <p>
                Connecting talent with opportunity. Find your dream career or
                the perfect candidate with our modern recruitment platform.
              </p>
              <div className="social-links">
                <a href="#">
                  {/* <i className="fab fa-facebook-f"></i> */}
                  <RiFacebookFill />
                </a>
                <a href="#">
                  {/* <i className="fab fa-twitter"></i>  */}
                  <RiTwitterFill />
                </a>
                <a href="#">
                  {/* <i className="fab fa-linkedin-in"></i> */}
                  <RiLinkedinFill />
                </a>
                <a href="#">
                  {/* <i className="fab fa-instagram"></i> */}
                  <RiInstagramLine />
                </a>
              </div>
            </div>

            <div className="footer-col">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a href="index.php">Home</a>
                </li>
                <li>
                  <a href="jobs.php">Browse Jobs</a>
                </li>
                {/* <?php if (isset($_SESSION['user_id'])): ?>
                        <?php if (isset($_SESSION['role']) == 'employer'): ?> */}

                {user &&
                user?.role !== "seeker" &&
                user?.role === "employer" ? (
                  <>
                    <li>
                      <Link to={"/company-profile"}>Profile</Link>
                    </li>
                    <li>
                      <Link to={"/post-job"}>Post Job</Link>
                    </li>
                    <li>
                      <Link to={"/employer-dashboard"}>Dashboard</Link>
                    </li>
                  </>
                ) : (
                  user &&
                  user?.role === "seeker" && (
                    <>
                      <li>
                        <Link to={"/profile"}>My Profile</Link>
                      </li>
                      <li>
                        <Link to={"/my-applications"}>My Application</Link>
                      </li>
                    </>
                  )
                )}

                {/* <li>
                  <a href="post-job.php">Post a Job</a>
                </li>
                <li>
                  <a href="employer-dashboard.php">Dashboard</a>
                </li> */}
                {/* <?php else: ?> */}
                {/* <li>
                  <a href="my-applications.php">My Applications</a>
                </li>
                <li>
                  <a href="profile.php">My Profile</a>
                </li> */}
                {/* <?php endif; ?>
                    <?php else: ?> */}

                {!user && (
                  <>
                    <li>
                      <a href="login.php">Login</a>
                    </li>
                    <li>
                      <a href="register.php">Register</a>
                    </li>
                  </>
                )}
                {/* <?php endif; ?> */}
              </ul>
            </div>

            <div className="footer-col">
              <h3>Contact Us</h3>
              <ul className="contact-list">
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <RiMapPinFill size={18} />
                  MODASA,COLLAGE COMPASS
                </li>
                <li>
                  <i className="fas fa-envelope"></i>
                  <Mail size={20} strokeWidth={2.5} /> parthcoder7773@gmail.com
                </li>
                <li>
                  <i className="fas fa-phone"></i>
                  <RiPhoneFill /> +91 9999999999
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              &copy; 2026 JobSync. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
