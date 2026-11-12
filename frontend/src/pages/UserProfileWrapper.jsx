import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";

function UserProfileWrapper({ children }) {
  const { loading, user } = useContext(UserDataContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        navigate("/signIn", { replace: true });
      } else if (user.role !== "seeker") {
        navigate("/signIn", { replace: true });
      }
    }
  }, [user, loading, navigate]);
  if (loading) {
    return (
      <>
        <div className="flex justify-center items-center h-screen bg-gray-50">
          <span className="text-xl font-semibold text-gray-600">
            Verifying session....
          </span>
        </div>
      </>
    );
  }

  return <>{children}</>;
}

export default UserProfileWrapper;
