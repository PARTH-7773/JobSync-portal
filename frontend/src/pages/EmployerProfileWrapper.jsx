import { useContext, useEffect } from "react";
import { UserDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import Hearder from "../components/Hearder";
import toast from "react-hot-toast";

function EmployerProfileWrapper({ children }) {
  const { loading, user } = useContext(UserDataContext);
  // console.log(user, loading);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        navigate("/", { replace: true });
      } else if (user.role !== "employer") {
        navigate("/", { replace: true });
      }
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <>
      <Hearder/>
        <div className="flex justify-center items-center h-screen bg-gray-50">
          <span className="text-xl font-semibold text-gray-600">
            Verifying session...
          </span>
        </div>
      </>
    );
  }

  return <>{children}</>;
}

export default EmployerProfileWrapper;
