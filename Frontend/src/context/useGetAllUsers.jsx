import { useEffect, useState } from "react";
import axios from 'axios';
import { useAuth } from "./Auth";

export const useGetAllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { token } = useAuth();

  const getUsers = async () => {
    if (!token) return; 

    try {
      setLoading(true);
      setError(null);
      const { data } = await axios.get("http://localhost:8080/api/v1/users/getusers", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      
      });
      setAllUsers(data);
    } catch (error) {
      console.error(error);
      setError("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      getUsers();
    }
  }, [token]); 

  return { allUsers, loading, error };
};
