/* eslint-disable react/prop-types */

import { useAuth } from '../../../context/Auth.jsx'
function Message({ message }) {
  console.log(message);

  const { user } = useAuth()
  // console.log(user);

  const currentUserId = user._id
  // Check if the message was sent by the current user
  const isCurrentUser = message.senderId === currentUserId;

  return (
    <div className={`p-4 ${isCurrentUser ? 'chat chat-end' : 'chat chat-start'}`}>

      <div className={`chat-bubble ${isCurrentUser ? 'chat-bubble-info' : 'chat-bubble-success'}`}>
        {message.message}
      </div>
    </div>
  );
}

export default Message;
