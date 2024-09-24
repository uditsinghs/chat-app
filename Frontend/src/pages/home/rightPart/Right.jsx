import Chatuser from "./Chatuser"
import Messages from "./Messages"
import Typesend from "./Typesend"

function Right() {
  return (
    <div className="w-[70%] bg-slate-900">
      <Chatuser />
      <Messages />
      <Typesend />
    </div>
  )
}

export default Right