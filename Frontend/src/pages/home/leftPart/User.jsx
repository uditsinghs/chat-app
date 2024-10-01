/* eslint-disable react/prop-types */
import { useGetAllUsers } from "../../../context/useGetAllUsers";
import Loading from '../../../component/Loading'
import useConversation from "../../../zustand/useConversation";
function User({ user }) {
  const { selectedConversation, setSelectedConversation } = useConversation()
  let isSelected = selectedConversation?._id === user._id;
  const { loading } = useGetAllUsers();
  return (
    <div className={`hover:bg-slate-600 duration-300 ${isSelected} ? bg-slate-700 : "" `}
      onClick={() => setSelectedConversation(user)}>
      {loading && (<Loading />)}
      <div className="flex space-x-4 px-8 py-2 items-center hover:bg-slate-600 duration-300 cursor-pointer">
        <div className="avatar">
          <div className="w-16 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="User Avatar" />
          </div>
        </div>
        <div>
          <h1 className="font-bold">{user.name}</h1>
          <span>{user.email}</span>
        </div>
      </div>



    </div>


  );
}

export default User;
