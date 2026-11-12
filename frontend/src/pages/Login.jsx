import {
  ArrowLeft,
  ArrowRight,
  Lock,
  LucideInfo,
  LucideMessageSquareWarning,
  User,
} from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import "../styling/style_ex.css";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

function Login() {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const {user} = useContext(UserDataContext);
  const navigate = useNavigate();
  const { login } = useAuth();

  async function handleLogin(e) {
    e.preventDefault();
    const userdata = {
      email,
      password,
    };

    const respose = await login(userdata);

    if (!respose.data?.success) {
      if (respose?.message) {
        toast.error(respose.message)
        return setError(respose.message);
      } else if (respose.data?.message) {
        toast.error(respose.data.message)
        return setError(respose.data.message);
      } else if (respose.data?.errors) {
        toast.error(respose.data.errors[0].msg)
        return setError(respose.data.errors[0].msg);
      } else {
        toast.error(respose)
        setError(respose);
      }
    } else if (respose.data.success && respose.status === 200) {
      toast.success("Login success")
      navigate("/");
    }else{
      setError('Internal server error')
    }

    // console.log(respose);
  }

  return (
    <div className="auth-body">
      <div className="auth-wrapper">
        <div className="auth-header">
          <h2 className="text-xl font-bold">Welcome Back</h2>
          <p>Enter your credentials to access your account</p>
        </div>

        {/* <?php if ($error): ?> */}

        {error ? (
          <div className="alert alert-error font-semibold">
            {/* <i className="fas fa-exclamation-circle"></i> */}
            <LucideMessageSquareWarning />

            {/* <?php echo $error; ?> */}
            {error}
          </div>
        ) : (
          ""
        )}
        {/* <?php endif; ?> */}

        {/* <?php if ($msg): ?> */}
        {success ? (
          <div className="alert alert-info">
            <i className="fas fa-info-circle"></i>
            <LucideInfo />
            {/* <?php echo $msg; ?> */}
            
          </div>
        ) : (
          ""
        )}
        {/* <?php endif; ?> */}

        <form
          onSubmit={(e) => handleLogin(e)}
          //  method="POST" action="login.php"
        >
          <div className="input-group">
            <input
              type="email"
              name="username"
              placeholder="Enter your email"
              required
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <User
              strokeWidth={2.5}
              size={24}
              className="absolute top-3 left-3 text-gray-500"
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i className="fas fa-lock"></i>
            <Lock
              strokeWidth={2.5}
              className="absolute top-3 left-3 text-gray-500"
            />
          </div>

          <button type="submit" className="btn-auth-color relative">
            <span style={{ fontFamily: "system-ui" }}> Sign In</span>
            {/* <i className="fas fa-arrow-right" style={{ marginLeft: "8px" }}></i> */}
            <ArrowRight
              size={20}
              strokeWidth={3}
              width={50}
              className="absolute right-30 top-4 ml-2"
            />
          </button>
        </form>

        <div className="auth-footer">
          Don't have an account?{" "}
          <Link to={"/signUp"} className="text-[.9rem] ">
            Create one
          </Link>
          <br />
          <br />
          <Link
            to={"/"}
            style={{ color: "#999", fontSize: "0.8rem" }}
            className="flex items-center justify-center"
          >
            <ArrowLeft size={15} strokeWidth={3} width={20} />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
