import { X } from "lucide-react"

const Left = () => {
  return (
    <div className="max-w-xl w-full flex flex-col gap-5 px-10 ">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
                <X width={25} height={25} className="p-1 rounded-full bg-red-600" />
                <p className="text-red-600 font-semibold text-md">ORIGINAL DRAFT</p>
            </div>

            <p className="p-1 bg-base-100 border text-md border-gray-700 rounded-lg">
                142 words
            </p>
        </div>

        <div className="p-5 bg-base-100 border border-red-700/50 rounded-xl shadow-xl shadow-red-800/10"> 
            <p><span className="text-red-400 line-through">Hey Guys, </span>just wanted to say that the project is <span className="text-red-400 underline">gonna be late</span>. We had some issues with the code and its not working right. <span className="text-red-400 bg-red-800/10">Needs more time</span> to fix bugs. Will update u later when we know more about whats happening. Thanks for waiting.</p>
        </div>
    </div>
  )
}

export default Left