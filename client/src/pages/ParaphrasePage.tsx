import { Clipboard, Sparkles, Trash } from "lucide-react";
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
        <div className="flex flex-wrap items-center justify-center  md:justify-between w-full gap-5 sm:gap-7 md:gap-10 lg:gap-20 p-5 bg-[#1A1A1E] border border-gray-500/70 rounded-xl ">
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
                <div className="badge badge-outline badge-info">Significant</div>
              </div>

              <input defaultValue={50} type="range" min={0} max="100" value={range} className="range range-info range-xs w-full" onChange={(e)=>setRange(e.target.value)} />

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
        <div className="flex flex-wrap gap-20 justify-center place-items-center ">
          <div className="bg-gray-700 max-w-2xl w-full  flex flex-col rounded-xl border border-gray-600">
              <div className="flex justify-between bg-[#1A1A1E] p-3 rounded-md">
                <p className="text-sm font-semibold text-[#928FC5]">ORIGINAL TEXT</p>
                <div>
                  <button className="text-sm font-semibold flex gap-1 items-center text-blue-800 cursor-pointer hover:text-blue-900"><Clipboard width={14}/>Paste Text</button>
                </div>
              </div>

              <textarea placeholder="Paste or type your text here to begin rewriting..." className="textarea textarea-md w-full "></textarea>

              <div className="flex items-center justify-between bg-[#1A1A1E] p-3 rounded-md">
                <p className="text-xs text-[#928FC5]">0 / 2500 Words</p>
                <div className="cursor-pointer hover:scale-105">
                  <Trash width={16} className="text-[#928FC5]"/>
                </div>
              </div>


          </div>

          <div className="bg-gray-700 max-w-2xl w-full h-65">

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