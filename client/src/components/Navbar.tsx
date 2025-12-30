import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/clerk-react"
import { useState } from "react"
import { Link } from "react-router";


const Navbar = () => {
    const [open, setOpen] = useState(false)
    const {user} = useUser();
    
    return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-600 bg-[#121022] relative transition-all">

            <a href="/" className="flex items-center gap-2">
                <img src="/logo.png" alt="" width={40} />
                <h1 className="text-white font-semibold text-lg lg:text-2xl">SabiKonaEh</h1>
            </a>

            {/* Desktop Menu */}
            {!user? (
                <div>
                    <div className="hidden sm:flex items-center gap-8">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Contact</a>

                        <div className="flex items-center gap-3">
                            <div className="cursor-pointer px-4 md:px-8 py-1 md:py-2 bg-gray-500 hover:bg-gray-600 transition text-white rounded-full">
                                <SignInButton mode="modal">
                                    Login
                                </SignInButton>
                            </div>
                            <div className="cursor-pointer px-4 md:px-8 py-1 md:py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full">
                                <SignUpButton mode="modal">
                                    Signup
                                </SignUpButton>
                            </div>
                        </div>
                    </div>

                <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
                    {/* Menu Icon SVG */}
                    <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="21" height="1.5" rx=".75" fill="#426287" />
                        <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
                        <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
                    </svg>
                </button>

                {/* Mobile Menu */}
                <div className={`${open ? 'flex' : 'hidden'} absolute top-15 left-0 w-full bg-[#121022] shadow-md py-4 flex-col items-start gap-2 px-5 text-sm sm:hidden`}>
                    <a href="#" className="block">Home</a>
                    <a href="#" className="block">About</a>
                    <a href="#" className="block">Contact</a>
                    <div className="flex items-center gap-2">
                        <div className="cursor-pointer px-6 py-2 mt-2 bg-gray-500 hover:bg-gray-600 transition text-white rounded-full text-sm">
                            <SignInButton mode="modal">
                                Login
                            </SignInButton>
                        </div >

                        <div className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm">
                            <SignUpButton mode="modal">
                                Signup
                            </SignUpButton>
                        </div>
                    </div>
                </div>
                    </div>
                ):(
                    <div>
                        <div className="hidden sm:flex items-center gap-8">
                                <Link to={'/summarize'} className="font-bold">Summarize</Link>
                                <Link to={'/paraphrase'} className="font-bold">Paraphrase</Link>
                            
                                <UserButton/>
                               
                        </div>

                        <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
                            {/* Menu Icon SVG */}
                            <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="21" height="1.5" rx=".75" fill="#426287" />
                                <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
                                <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
                            </svg>
                        </button>

                        {/* Mobile Menu */}
                        <div className={`${open ? 'flex' : 'hidden'} absolute top-15 left-0 w-full bg-[#121022] shadow-md py-4 flex-col items-start gap-2 px-5 text-sm sm:hidden`}>
                            <Link to={'/summarize'} className="block font-bold">Summarize</Link>
                            <Link to={'/paraphrase'} className="block font-bold">Paraphrase</Link>
                      
                            <UserButton/>
                           
                        </div>

                        
                    </div>
                )}

        </nav>
    )
}

export default Navbar