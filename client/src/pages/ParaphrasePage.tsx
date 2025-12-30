import { Sparkles } from "lucide-react";
import { useState } from "react"

const ParaphrasePage = () => {

  const [range, setRange] = useState();

  return (
    <div className="flex flex-col min-h-screen bg-[#121022] p-5 md:p-10">
      {/* PARAPHRASE */}
      <div className="  w-full flex-1 flex flex-col gap-4">
        <div className="text-lg sm:text-xl lg:text-3xl font-semibold">
          PARAPHRASiNG TOOL
        </div>

        <div className="text-gray-400">
          Transform your text with AI-powered rewriting. Choose your preferred tone <br /> and intensity to get the perfect result.
        </div>

        {/* PARAPHRASE CONFIG */}
        <div className="flex flex-wrap items-center justify-center  md:justify-between w-full gap-5 sm:gap-7 md:gap-10 lg:gap-20 p-5 bg-base-100 border border-gray-500/70 rounded-xl ">
          <div className="">
            <p>Tone</p>
            <select defaultValue="Standard" className="select select-info">
              <option disabled={true}>Pick a Tone</option>
              <option>Standard</option>
              <option>Vue</option>
              <option>Angular</option>
            </select>
          </div>
          
          <div className="flex-1 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <p className="text-sm md:text-lg">REPHRASING INTENSITY</p>
                <p>Significant</p>
              </div>

              <input type="range" min={0} max="100" value={range} className="range range-info range-xs w-full" onChange={(e)=>setRange(e.target.value)} />

              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-400">Subtle</p>
                <p className="text-xs text-gray-400">Standard</p>
                <p className="text-xs text-gray-400">Significant</p>
              </div>
          </div>

          <div className="">
            <button className="btn btn-primary flex gap-2"><Sparkles width={15}/> PARAPHRASE</button>
          </div>

        </div>

        {/* TEXT AREA */}
        <div>
          <div>

          </div>

          <div>
            
          </div>
        </div>


      </div>

      

      {/* FOOTER */}
      <div className="w-full">

      </div>
    </div>
  )
}

export default ParaphrasePage