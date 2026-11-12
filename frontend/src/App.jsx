import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./App.css";
import "./styling/style_ex.css";
import "./styling/footer.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import Profile from "./pages/profile";
import PostJob from "./pages/PostJob";
import UserProfileWrapper from "./pages/UserProfileWrapper";
import MyApplications from "./pages/MyApplications";
import CompanyProfile from "./pages/CompanyProfile";
import EmployerProfileWrapper from "./pages/EmployerProfileWrapper";
import Notification from "./pages/Notification";
import Employer_Dashboard from "./pages/Employer_Dashboard";

function App() {
  return (
    <div>
      <Toaster position="bottom-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<Login />} />
        <Route path="/signUp" element={<Register />} />
        <Route path="/browse-job" element={<Jobs />} />

        {/* Protected routes */}
        <Route path="/job-details/:id" element={<JobDetails />} />
        <Route
          path="/profile"
          element={
            <UserProfileWrapper>
              <Profile />
            </UserProfileWrapper>
          }
        />
        <Route
          path="/company-profile"
          element={
            <EmployerProfileWrapper>
              <CompanyProfile />
            </EmployerProfileWrapper>
          }
        />
        <Route
          path="/post-job"
          element={
            <EmployerProfileWrapper>
              <PostJob />
            </EmployerProfileWrapper>
          }
        />
        <Route
          path="/my-applications"
          element={
            <UserProfileWrapper>
              <MyApplications />
            </UserProfileWrapper>
          }
        />

        <Route path="/notification" element={<Notification />} />
        <Route
          path="/employer-dashboard"
          element={
            <EmployerProfileWrapper>
              <Employer_Dashboard />
            </EmployerProfileWrapper>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
