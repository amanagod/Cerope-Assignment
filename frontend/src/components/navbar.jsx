import avtar from '../assets/adventurer-1763621075079.png';
import { Search } from 'lucide-react';









export default function App() { // Or whatever your main component is
    return (
        <div className="bg-pink-100 "> {/* Dark background for contrast */}

            {/* Main Navbar */}
            <nav className="w-full bg-white rounded-b-3xl shadow-lg px-6 py-3 flex items-center justify-between mt-0">

                {/* Left section: Logo/Branding */}
                <div className="flex items-center gap-2">
                    {/* Replaced with a placeholder for your custom SVG logo */}
                    <span className="text-2xl text-gray-700"><svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-black"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        {/* Simple infinity or loop icon placeholder */}
                        <path d="M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z"></path>
                        <path d="M7 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z"></path>
                    </svg></span> {/* Example placeholder icon */}
                    <h1 className="text-xl font-medium text-gray-800 hidden md:inline-block ">Cerope</h1>
                </div>

                {/* Right section: Button and Avatar */}
                <div className="flex items-center gap-3"> {/* Reduced gap slightly */}

                    {/* "Explore More" Button - Adjusted size and padding */}
                    <div className="relative p-[2px] rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 via-red-500 via-yellow-500 via-green-400 to-blue-500 hidden md:inline-block">
                        <button
                            className="
                                    font-bold
                                    relative inline-flex items-center gap-1 px-4 py-1.5
                                    text-lg text-black
                                    rounded-lg
                                    bg-gradient-to-b from-white to-[#d7d0f6]
                                    w-full
    "
                        >
                            Explore More
                            <span className="text-xs">✨</span>
                        </button>
                    </div>



                    <div className="
                flex items-center
                w-45 md:w-full
                p-3
                bg-white
                border border-gray-300
                rounded-xl
                shadow-sm
                transition-all duration-300
                focus-within:border-blue-500
                max-w-4xl mx-auto md:hidden
            ">
                        {/* Search Icon */}
                        <Search className="w-5 h-5 text-gray-500 mr-2 flex-shrink-0" />

                        {/* Input Field */}
                        <input
                            type="text"
                            placeholder="Search ..."
                            className="
                        flex-grow
                        bg-transparent
                        outline-none
                        text-base
                        text-gray-800
                        placeholder-gray-500
                        py-0
                    "
                        />
                    </div>

                    {/* Avatar - Slightly smaller with a ring */}
                    <img
                        src={avtar} // Replace with your avatar
                        alt="User Avatar"
                        className="w-8 h-8 rounded-full object-cover cursor-pointer ring-2 ring-blue-400 p-[1px] /* Ring with padding */"
                    />
                </div>
            </nav>
        </div>
    );
}