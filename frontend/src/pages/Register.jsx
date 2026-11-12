import {
  IdCard,
  LucideInfo,
  LucideMessageSquareWarning,
  UserCircleIcon,
  Mail,
  BriefcaseBusiness,
  Lock,
  LucideKeyRound,
  UserPlus,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
// import "../styling/style_ex.css";
import {  useState } from "react";
import useAuth from "../hooks/useAuth";

function Register() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsename] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError("Password does not match");
    }
    const userData = {
      fullname: fullName,
      username,
      email,
      password,
      role,
    };

    const response = await register(userData);
    // Handle backend errors
    if (!response.data?.success) {
      if (response?.message) {
        setError(response.message);
        return;
      } else if (response.data?.message) {
        setError(response.data.message);
        return;
      } else if (response.data?.errors) {
        setError(response.data.errors[0].msg);
        return;
      } else {
        setError(response);
        return;
      }
    } else if (response.data.success && response.status === 201) {
      navigate("/");
    } else {
      setError("Internal server error");
    }
  };

  return (
    <div className="auth-body">
      <div className="auth-wrapper">
        <div className="auth-header">
          <h2 className="text-xl font-bold">Create an Account</h2>
          <p>Join us as a Job Seeker or an Employer</p>
        </div>

        {/* <?php if ($error): ?> */}
        {error ? (
          <div className="alert alert-error">
            {/* <i className="fas fa-exclamation-circle"></i> */}
            <LucideMessageSquareWarning />
            {error}
            {/* <?php echo $error; ?> */}
          </div>
        ) : (
          ""
        )}
        {/* <?php endif; ?> */}

        {/* <?php if ($success): ?> */}
        {success ? (
          <div className="alert alert-success">
            {/* <i className="fas fa-check-circle"></i> */}
            <LucideInfo />

            {/* <?php echo $success; ?> */}
          </div>
        ) : (
          ""
        )}
        {/* <?php else: ?> */}
        <form onSubmit={(e) => handleRegister(e)}>
          <div className="input-group relative">
            <input
              type="text"
              name="full_name"
              placeholder="Full Name"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            {/* <i className="fas fa-id-card"></i> */}
            <IdCard className="absolute top-3.5 left-3 text-gray-600" />
          </div>

          <div className="input-group relative">
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsename(e.target.value)}
              // value="<?php echo $username; ?>"
            />
            {/* <i className="fas fa-user-circle"></i> */}
            <UserCircleIcon className="absolute text-gray-600 top-3.5 left-3" />
          </div>

          <div className="input-group relative">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              // value="<?php echo $email; ?>"
            />
            {/* <i className="fas fa-envelope"></i> */}
            <Mail className="absolute top-3.5 left-3 text-gray-600" />
          </div>

          <div className="input-group relative">
            <select
              name="user_type"
              required
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option
                value="seeker"

                // <?php echo $user_type == 'jobseeker' ? 'selected' : ''; ?>
              >
                I am a Job Seeker
              </option>
              <option
                value="employer"
                // <?php echo $user_type == 'employer' ? 'selected' : ''; ?>
              >
                I am an Employer
              </option>
            </select>
            {/* <i className="fas fa-briefcase"></i> */}
            <BriefcaseBusiness className="absolute text-gray-600 top-3 left-3" />
          </div>

          <div className="input-group relative">
            <input
              type="password"
              name="password"
              placeholder="Password (min 6 chars)"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <i className="fas fa-lock"></i> */}
            <Lock className="absolute text-gray-600 top-3.5 left-3" />
          </div>

          <div className="input-group">
            <input
              type="password"
              name="confirm_password"
              placeholder="Confirm Password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {/* <i className="fas fa-key"></i> */}
            <LucideKeyRound className="absolute text-gray-600 top-3.5 left-3" />
          </div>

          <button
            type="submit"
            className="btn-auth-color relative flex items-center justify-center"
          >
            <span style={{ fontFamily: "system-ui" }}> Register</span>
            <i className="fas fa-user-plus" style={{ marginLeft: "8px" }}></i>
            <UserPlus
              strokeWidth={2.8}
              size={21}
              className="absolute top-4 right-32"
            />
          </button>
        </form>
        {/* <?php endif; ?> */}

        <div className="auth-footer">
          Already have an account?{" "}
          <Link to={"/signIn"} className="text-[0.9rem]">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
