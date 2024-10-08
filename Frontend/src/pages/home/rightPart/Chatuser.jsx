
import useConversation from '../../../zustand/useConversation'
function Chatuser() {
  const {selectedConversation} = useConversation()
  return (
<div className="h-[10vh]">
<div className="flex items-center justify-center py-4 bg-gray-800 hover:bg-gray-700 duration-300 space-x-4 cursor-pointer">
      <div className="avatar online">
        <div className="w-16 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <div>
        <h1 className="text-xl font-bold">{selectedConversation?.name}</h1>
        <span className="text-sm">Online</span>
      </div>
    </div>
</div>

  )
}

export default Chatuser