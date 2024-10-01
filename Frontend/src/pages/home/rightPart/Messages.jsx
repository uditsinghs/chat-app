import Message from "./Message";
import useGetMessage from "../../../context/useGetMessage";
import Loading from "../../../component/Loading";

function Messages() {
  const { messages, loading } = useGetMessage();
  console.log(messages.messages);
  const messagesArr = messages.messages


  return (
    <div
      className="scrollbar-hide overflow-y-auto"
      style={{ maxHeight: "calc(100vh - 20vh)" }}
    >

      {loading ? (
        <Loading />
      ) : (
        <>
          {messagesArr && messagesArr.length > 0 ? (
            messagesArr.map((msg) => {
              console.log("message", msg);

              return (
                <>
                  <Message key={msg._id} message={msg} />
                  <p>{msg.Message}</p>
                </>
              )
            })
          ) : (
            // Display message when no messages are available
            <p className="text-center">Say hi..! to start the conversation</p>
          )}
        </>
      )}
    </div>
  );
}

export default Messages;
