// import { RiSidebarFoldFill } from "@remixicon/react";
import { BellIcon, LogOut } from "lucide-react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import useAuth from "../hooks/useAuth";
import gsap from "gsap";
import toast from "react-hot-toast";

function Hearder() {
  const { user } = useContext(UserDataContext);
  const { logout } = useAuth();
  const navigate = useNavigate();
  async function handleLogout() {
    const res = await logout();
    if (res.success) {
      toast.success("Your are Sign Out");
      return navigate("/");
    }
  }

  return (
    <>
      <header className="sticky top-0 left-0 z-50  max-w-full w-full h-full @min-5xl:flex-wrap ">
        <nav className="navbar ">
          <div className="container">
            <div className="logo">
              <Link to={"/"}>
                <h1>
                  <span className="text-white">Job</span>
                  <span className="text-[#3498db]">Sync</span>
                </h1>
              </Link>
            </div>
            <ul className="nav-links">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/browse-job"}>Browse Job</Link>
              </li>

              {/* <?php if (isLoggedIn() && !isAdmin()): ?> */}

              {/* <?php if (isEmployer()): ?> */}
              {/* <!-- <li><a href="post-job.php">Post Job</a></li> --> */}

              {/* <?php else: ?> */}
              {/* <!-- <li><a href="saved-jobs.php">Saved Jobs</a></li> --> */}

              {/* <?php if (!isEmployer()); ?> */}
              {user && user?.role !== "seeker" && user?.role === "employer" ? (
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
              ) :
              user && user?.role === 'seeker' && 
              (
                <>
                  <li>
                    <Link to={"/profile"}>Profile</Link>
                  </li>
                  <li>
                    <Link to={"/my-applications"}>My Application</Link>
                  </li>
                </>
              )}
              {/* <?php endif; ?> */}

              <li className="relative mr-2.5">
                <Link
                  to={"/notification"}
                  className="text-[#151515] text-[1.2rem] flex items-center"
                >
                  <BellIcon color="#000000" strokeWidth={2.5} />
                  {/* <?php if ($notif_count > 0): ?> */}
                  <span
                    className="absolute -top-2 -right-2 h-5 w-5 text-center  bg-[#f9604f] text-white text-[0.7rem] p-[2px 5px] rounded-full font-semibold "
                    // style="position: absolute; top: -8px; right: -8px; background: #e74c3c; color: white; font-size: 0.7rem; padding: 2px 5px; border-radius: 50%; font-weight: bold;"
                  >
                    {/* <?php echo $notif_count; ?> */}1
                  </span>
                  {/* <?php endif; ?> */}
                </Link>
              </li>
              {/* <div className="flex gap-3 items-center justify-center"> */}
              <ul className="flex gap-3 items-center justify-center">
                {user ? (
                  <>
                    <li>
                      {/* <?php echo htmlspecialchars($_SESSION['full_name']); ?> */}
                      <button className="btn-secondary-logout-new  flex">
                        <div className="h-full w-full bg-gray-400 rounded-full capitalize flex items-center justify-between gap-2 font-bold text-[#1d2221] overflow-hidden tracking-tight transition-all relative">
                          <span className="h-8 w-8 bg-red-200 rounded-full flex justify-center items-center hover:bg-red-300 text-[0.99rem] ">
                            {user.email.slice(0, 2).toUpperCase()}
                          </span>
                          <span className="text-[11px] border-b border-t border-dashed font-semibold text-gray-600 uppercase">
                            {user?.role}
                          </span>
                          <span
                            onClick={handleLogout}
                            className="text-[#423f3f] h-7 w-7 flex justify-center items-center transition-normal "
                          >
                            <LogOut
                              size={19}
                              strokeWidth={2.5}
                              className="hover:text-[#060505] hover:scale-105"
                            />
                          </span>
                        </div>
                      </button>
                    </li>
                  </>
                ) : (
                  <div className="flex items-center justify-center gap-3">
                    <li>
                      <Link to={"/signIn"} className="btn">
                        Sing In
                      </Link>
                    </li>
                    <li>
                      <Link to={"/signUp"} className="btn-primary">
                        Sing Up
                      </Link>
                    </li>
                  </div>
                )}
              </ul>
              {/* </div> */}
              {/* <?php endif; ?> */}
            </ul>
            {/* <RiSidebarFoldFill color="white" className="sidebar " onClick={sidebar} /> */}
          </div>
        </nav>
      </header>
    </>
  );
}

export default Hearder;
