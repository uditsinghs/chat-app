import {useAuth} from '../../../context/Auth'
function Chatuser() {
  const {user} = useAuth()
  return (
<div className="h-[10vh]">
<div className="flex items-center justify-center py-4 bg-gray-800 hover:bg-gray-700 duration-300 space-x-4 cursor-pointer">
      <div className="avatar online">
        <div className="w-16 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <div>
        <h1 className="text-xl font-bold">{user.name}</h1>
        <span className="text-sm">Offline</span>
      </div>
    </div>
</div>

  )
}

export default Chatuser