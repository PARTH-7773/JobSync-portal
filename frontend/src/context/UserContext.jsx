import { createContext, useEffect, useState } from "react";
import api from "../lib/api";

export const UserDataContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [seekerProfile, setSeekerProfile] = useState("");

  useEffect(() => {
    const ckeckUserSession = async () => {
      try {
        const res = await api.get("/api/v1/user/profile");
        // console.log(res)
        if (res.status === 200 && res.data.success) {
          setUser(res.data.data);
        }
        // console.log(res)
      } catch (error) {
        setUser(null);
        setLoading(false);
        console.log(error.response ? error.response : error.message);
      } finally {
        setLoading(false);
      }
    };
    ckeckUserSession();
  }, [!user]);

  return (
    <div>
      <UserDataContext.Provider
        value={{ user, setUser, loading, seekerProfile, setSeekerProfile }}
      >
        {children}
      </UserDataContext.Provider>
    </div>
  );
};

export default UserContext;
