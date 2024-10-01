import { useState, useEffect } from "react";
import useConversation from "../zustand/useConversation";
import axios from "axios";
import { useAuth } from "./Auth";
const useGetMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  const { token } = useAuth();
  useEffect(() => {
    const getMessages = async () => {
      if (!selectedConversation?._id) return;

      setLoading(true);
      try {
        const { data } = await axios.get(
          `http://localhost:8080/api/v1/message/get/${selectedConversation._id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setMessages(data);
      } catch (error) {
        console.error("Error fetching messages: ", error);
      } finally {
        setLoading(false);
      }
    };

    getMessages();
  }, [selectedConversation?._id, setMessages]);

  return { loading, messages };
};

export default useGetMessage;
