import { RiLogoutCircleRLine } from "react-icons/ri";
import { useAuth } from "../../../context/Auth";
import { useNavigate } from 'react-router-dom'
function Logout() {
  const navigate = useNavigate()
  const { logout } = useAuth()
  const handleLogout = () => {
    logout()
    navigate("/login")
  }
  return (
    <div className="h-[10vh]">
      <div>

      </div>
      <RiLogoutCircleRLine onClick={handleLogout} className="text-5xl hover:bg-slate-700 duration-300 cursor-pointer rounded-full m-2 p-2" />
    </div>
  )
}

export default Logout