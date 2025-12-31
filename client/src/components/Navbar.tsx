import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/clerk-react"
import { useState } from "react"
import { Link, useLocation } from "react-router";


const Navbar = () => {
    const [open, setOpen] = useState(false)
    const {user} = useUser();

    const location = useLocation();
    const path = location.pathname;
    
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
                        <a href="/">Home</a>
                        <a href="#features">Features</a>
                        <a href="#contacts">Contact</a>

                        <div className="flex items-center gap-3">
                            <SignInButton mode="modal">
                                <div className="cursor-pointer px-4 md:px-8 py-1 md:py-2 bg-gray-500 hover:bg-gray-600 transition text-white rounded-full">
                                        Login
                                </div>
                            </SignInButton>
                            <SignUpButton mode="modal">
                                <div className="cursor-pointer px-4 md:px-8 py-1 md:py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full">
                                        Signup
                                </div>
                            </SignUpButton>
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
                    <a href="/" className="block">Home</a>
                    <a href="#features" className="block">Features</a>
                    <a href="#contacts" className="block">Contact</a>
                    <div className="flex items-center gap-2">
                        <SignInButton mode="modal">
                            <div className="cursor-pointer px-6 py-2 mt-2 bg-gray-500 hover:bg-gray-600 transition text-white rounded-full text-sm">
                                    Login
                            </div >
                        </SignInButton>

                        <SignUpButton mode="modal">
                            <div className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm">
                                    Signup
                            </div>
                        </SignUpButton>
                    </div>
                </div>
                    </div>
                ):(
                    <div>
                        <div className="hidden sm:flex items-center gap-8">
                                <Link to={'/summarize'} className={`font-bold ${path=="/summarize" ? "text-primary" : ""}`}>Summarize</Link>
                                <Link to={'/paraphrase'} className={`font-bold ${path=="/paraphrase" ? "text-primary" : ""}`}>Paraphrase</Link>
                            
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
                            <Link to={'/summarize'} className={`font-bold block ${path=="/summarize" ? "text-primary" : ""}`}>Summarize</Link>
                            <Link to={'/paraphrase'} className={`font-bold block ${path=="/paraphrase" ? "text-primary" : ""}`}>Paraphrase</Link>
                      
                            <UserButton/>
                           
                        </div>

                        
                    </div>
                )}

        </nav>
    )
}

export default Navbar