import { IoSend } from "react-icons/io5";
function Typesend() {
  return (
    <div className="flex w-full space-x-2 p-2 ">
      <div className="w-[70%]">
        <input type="text" placeholder="Type messages..!" className="input input-bordered w-full text-xl bg-slate-800" />
      </div>
      <button><IoSend className="text-4xl" /></button>
    </div>
  )
}

export default Typesend