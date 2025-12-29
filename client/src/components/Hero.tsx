import { BadgeCheck, Play } from "lucide-react"

const Hero = () => {
  return (
    <div className="min-h-[80vh] grid md:grid-cols-2 items-center gap-10 max-w-7xl w-full mx-auto px-10">
        {/* LEFT SIDE */}
        <div className="flex flex-col space-y-4"> 
            <div className=" max-md:text-center">
                <p className="badge badge-soft badge-info">
                    v2.0 NOW AVAILABLE
                </p>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-black max-md:text-center">RIGHT BETTER, <br /> <span className="">FASTER WITH AI</span></h2>

            <div>
                <p className="text-lg sm:text-xl max-md:text-center">Instant summaries and seamless paraphrasing - all in one workspace. Experience e futureof writing assistance today.</p>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-3">
                <button className="btn btn-primary">Try for Free</button>
                <button className="btn btn-soft flex items-center gap-2"><Play width={16}/>View Demo</button>

            </div>

            <div className="flex items-center gap-3 max-md:justify-center">
                <BadgeCheck className="bg-green-500 rounded-full"/>
                <p>No Credit Card required</p>
            </div>
        </div>

        {/* RIGHT SIDE */}
        <div>

        </div>
    </div>
  )
}

export default Hero