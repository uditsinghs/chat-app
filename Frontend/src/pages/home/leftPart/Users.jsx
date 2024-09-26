import User from "./User"

function Users() {
  return (
    <div className="p-2">
      <h1 className="pl-7 bg-slate-800 p-3 rounded-lg font-semibold">Messages</h1>

      <div className="scrollbar-hide overflow-y-auto py-2" style={{maxHeight:"calc(82vh - 10vh)"}}>
        <User />
      </div>
    </div>

  )
}

export default Users