import { FaSearch } from "react-icons/fa";
function Search() {
  return (
    <div className="h-[10vh]">
      <div className="px-6 py-5">
        <form action="">
          <div className="flex space-x-3">
            <label className="rounded-lg p-3 border-gray-700 border-[1px] bg-slate-900  flex items-center w-[80%] ">
              <input type="text" className="grow text-xl outline-none bg-slate-700 " placeholder="Search" />
            </label>
            <button>
              {" "}
              <FaSearch className="text-5xl hover:bg-gray-500 rounded-full p-2  " />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Search;
