      <nav className="bg-gray-800 text-white px-4 py-3">
        <div className="flex justify-between items-center mx-auto ">
          <div className="text-red-600">logo</div>

          
            <ul className=" hidden sm:flex gap-5">
              <li className="relative group cursor-pointer hover:bg-fuchsia-500">About
                <span className="absolute left-0 bottom-0 w-0 h-1 bg-white transition-all duration-500 group-hover:w-full "></span>
              </li>
              <li className="relative group cursor-pointor">Blogs</li>
              <li className="relative group cursor-pointor">Projects</li>
            </ul>
          
          
            <button className="hidden sm:block bg-blue-400 hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow-md">Contact ME</button>
          
          <div className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
            <div className="text-white hover:scale-3d hover:text-red-500"> {isOpen ? "X" : "O"}</div>
          </div>
        </div>
        {/* Mobile view */}
        {isOpen && (
          <ul className="sm:hidden flex flex-col gap-4 mt-4">
            <li>HOME</li>
            <li>About</li>
            <li>Blogs</li>
            <li>Projects</li>
            <li className="bg-blue-400 hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow-md">Contact ME</li>
          </ul>
        )}
      </nav>