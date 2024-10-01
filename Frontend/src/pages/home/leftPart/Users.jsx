import User from "./User"
import { useGetAllUsers } from "../../../context/useGetAllUsers";


function Users() {
  const { allUsers } = useGetAllUsers();

  return (
    <div className="p-2">
      <h1 className="pl-7 bg-slate-800 p-3 rounded-lg font-semibold">Messages</h1>
      {allUsers.map((user) =>
      (
        <div key={user._id} className="scrollbar-hide overflow-y-auto py-2" style={{ maxHeight: "calc(82vh - 10vh)" }}>

          <User user={user} />
        </div>
      )
      )}

    </div>

  )
}

export default Users