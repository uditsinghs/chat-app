import { useGetAllUsers } from "../../../context/useGetAllUsers";
import Loading from '../../../component/Loading'
function User() {
  const { allUsers, loading } = useGetAllUsers();
  console.log(allUsers);
  return (
    <div>
      {loading && (<Loading />)}
      {allUsers?.map((u) => (
        <div key={u._id} className="flex space-x-4 px-8 py-2 items-center hover:bg-slate-600 duration-300 cursor-pointer">
          <div className="avatar">
            <div className="w-16 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="User Avatar" />
            </div>
          </div>
          <div>
            <h1 className="font-bold">{u.name}</h1>
            <span>{u.email}</span>
          </div>
        </div>
      ))}


    </div>


  );
}

export default User;
