import { BadgeCheck, Play } from "lucide-react"
import TextType from "./animation/TextType"
import { SignUpButton } from "@clerk/clerk-react"
import Stack from './animation/Stack'

import img1 from '../assets/1.jpeg'
import img2 from '../assets/2.jpeg'
import img3 from '../assets/3.jpeg'
import img4 from '../assets/4.jpeg'


const images = [
  img1,
  img2,
  img3,
  img4
];

const Hero = () => {
  return (
    <div className="min-h-[80vh] grid md:grid-cols-2 items-center gap-10 max-w-7xl w-full mx-auto p-10 ">
        {/* LEFT SIDE */}
        <div className="flex flex-col space-y-4"> 
            <div className=" max-md:text-center">
                <p className="badge badge-soft badge-info">
                    v2.0 NOW AVAILABLE
                </p>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-black max-md:text-center">
                <TextType 
                    text={["RIGHT BETTER,"]}
                    typingSpeed={200}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                    />
                <br /> <span className="">FASTER WITH AI</span></h2>

            <div>
                <p className="text-lg sm:text-xl max-md:text-center">Instant summaries and seamless paraphrasing - all in one workspace. Experience e futureof writing assistance today.</p>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-3">
                <SignUpButton mode="modal">
                    <div className="btn btn-primary">
                        Try for Free
                    </div>
                </SignUpButton>
                <button className="btn btn-soft flex items-center gap-2"><Play width={16}/>View Demo</button>
            </div>

            <div className="flex items-center gap-3 max-md:justify-center">
                <BadgeCheck className="bg-green-500 rounded-full"/>
                <p>No Credit Card required</p>
            </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="size-72 md:size-90 lg:size-120 shadow-md flex items-center justify-center w-full">
            <Stack
                randomRotation={true}
                sensitivity={180}
                sendToBackOnClick={true}
                cards={images.map((src, i) => (
                <img 
                    key={i} 
                    src={src} 
                    alt={`card-${i + 1}`} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
                ))}
            />
        </div>
    </div>
  )
}

export default Hero