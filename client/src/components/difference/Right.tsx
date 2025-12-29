import { Check } from "lucide-react"


const Right = () => {
  return (
    <div className="max-w-xl w-full flex flex-col gap-5 px-10 ">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Check width={25} height={25} className="p-1 rounded-full bg-blue-600" />
                    <p className="text-blue-600 font-semibold text-md">AI POLISHED</p>
                </div>

                <p className="px-2 py-1 bg-blue-600/20 text-md rounded-lg">
                    Profesisonal Tone
                </p>
            </div>

            <div className="p-5 bg-base-100 border border-blue-700/50 rounded-xl shadow-xl shadow-blue-800/10"> 
                <p>
                    <span className="text-green-600 font-bold">Dear Team,</span><br /><br />
                    I am writing to inform you of a <span className="text-green-600">slight delay</span> in the project timeline. Due to unforeseen technical challenges, we require additional time to ensure the codebase meets our quality standards. We will provide a comprehensive udpate shortly. Thank you for your patience. 

                </p>
            </div>
        </div>
  )
}

export default Right