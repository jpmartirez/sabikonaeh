import { Clipboard, Copy, RotateCcw, Sparkles, Trash } from "lucide-react";
import { useState } from "react"
import toast from "react-hot-toast";
import axios from 'axios'

const ParaphrasePage = () => {

  axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL;

  const [range, setRange] = useState<number>(50);
  const [tone, setTone] = useState("Standard")

  const [original, setOriginal] = useState("");
  const [paraphrased, setParaphrased] = useState<string>("");
  const [words, setWords] = useState(0);
  const [isExceeded, setIsExceeded] = useState(false);
  const [empty, isEmpty] = useState(true);

  const [loading, isLoading] = useState(false);


  const countWords = (text : String) => {
    if (text==="") {
      isEmpty(true)
      return 0
    };

    isEmpty(false)

    const count = text.trim().split(/\s+/).length;

    if(count > 250) {
      setIsExceeded(true)
      toast.error("Word count exceeded!")
    }
    else setIsExceeded(false)

    return count;
  }

  const handleText = (text: string) => {
    setWords(countWords(text));
    setOriginal(text)
  }

  const copyText = () => {
    navigator.clipboard.writeText(paraphrased)
    .then(()=> {
      toast.success("Copied!")
    })
    .catch((err)=> {
      toast.error(err)
    })
  }
 
  const pasteText = async() => {
    try {
      const text = await navigator.clipboard.readText();
      handleText(text);
    } catch (error) {
      console.log(error)
    }
  }

  function intensityToText(intensity: number) {
    if (intensity < 33) return "subtle";
    if (intensity < 66) return "standard";
    return "significant";
  }

  const getResult = async ()=>{

      isLoading(true);
    
      const prompt = `Paraphrase the following text with a ${tone.toLowerCase()} tone
        and ${intensityToText(range)} rephrasing intensity.
        Do not change the meaning of the text.
        Original text: "${original}"
        `;

      const {data} = await axios.post('/api/openai', {prompt});
      setParaphrased(data.result);

      isLoading(false);

  }

  return (
    <div className="flex flex-col min-h-screen bg-[#121022] p-5 md:p-10">
      {/* PARAPHRASE */}
      <div className="  w-full flex-1 flex flex-col gap-4">
        <div className="text-lg sm:text-xl lg:text-3xl font-semibold">
          PARAPHRASING TOOL
        </div>

        <div className="text-gray-400">
          Transform your text with AI-powered rewriting. Choose your preferred tone <br /> and intensity to get the perfect result.
        </div>

        {/* PARAPHRASE CONFIG */}
        <div className="flex flex-wrap items-center justify-center  md:justify-between w-full gap-5 sm:gap-7 md:gap-10 lg:gap-20 p-5 bg-[#1A1A1E] border border-gray-500/70 rounded-xl ">
          <div className="">
            <p>Tone</p>
            <select defaultValue="Standard" value={tone} onChange={e => setTone(e.target.value)} className="select select-info">
              <option disabled={true}>Pick a Tone</option>
              <option>Standard</option>
              <option>Formal</option>
              <option>Casual</option>
            </select>
          </div>
          
          <div className="flex-1 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <p className="text-sm md:text-lg">REPHRASING INTENSITY</p>
                <div className="badge badge-outline badge-info">Significant</div>
              </div>

              <input defaultValue={50} type="range" min={0} max="100" value={range} className="range range-info range-xs w-full" onChange={(e)=>setRange(Number(e.target.value))} />

              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-400">Subtle</p>
                <p className="text-xs text-gray-400">Standard</p>
                <p className="text-xs text-gray-400">Significant</p>
              </div>
          </div>

          <div className="">
            <button disabled={isExceeded || empty || loading} onClick={getResult} className="btn btn-primary flex gap-2"><Sparkles width={15}/> PARAPHRASE</button>
          </div>
        </div>

        {/* TEXT AREA */}
        <div className="flex flex-wrap gap-5 md:gap-10 lg:gap-15 xl:gap-17 justify-center place-items-center ">
          {/* LEFT AREA */}
          <div className="bg-gray-700 max-w-2xl w-full  flex flex-col rounded-xl border border-gray-600">
              <div className="flex justify-between bg-[#1A1A1E] p-3 rounded-md">
                <p className="text-sm font-semibold text-[#928FC5]">ORIGINAL TEXT</p>
                <div>
                  <button onClick={pasteText} className="text-sm font-semibold flex gap-1 items-center text-blue-800 cursor-pointer hover:text-blue-900"><Clipboard width={14}/>Paste Text</button>
                </div>
              </div>

              <textarea  onChange={(e) => handleText(e.target.value)} value={original} placeholder="Paste or type your text here to begin rewriting..." className="textarea textarea-md w-full text-lg h-60"></textarea>

              <div className="flex items-center justify-between bg-[#1A1A1E] p-3 rounded-md">
                <p className="text-xs text-[#928FC5]">{words} / 250 Words</p>
                <div className="cursor-pointer hover:scale-105">
                  <Trash width={16} className="text-[#928FC5]" onClick={() => {handleText(""); toast.success("Deleted")}}/>
                </div>
              </div>
          </div>

          {/* RIGHT AREA */}
          <div className="bg-gray-700 max-w-2xl w-full  flex flex-col rounded-xl border border-gray-600">
              <div className="flex justify-between bg-[#1A1A1E] p-3 rounded-md">
                <p className="text-sm font-semibold text-[#928FC5]">PARAPHRASED</p>
                <div>
                  <button onClick={copyText} className="text-sm font-semibold flex gap-1 items-center text-blue-800 cursor-pointer hover:text-blue-900"><Copy /></button>
                </div>
              </div>

              <div className="h-72 bg-[#1a3b61] overflow-hidden overflow-y-scroll">
                {loading? (
                  <div className="flex items-center justify-center h-full">
                    <span className="loading loading-spinner text-primary"></span>
                  </div>
                ): (
                  <p className="p-3 text-lg">{paraphrased}</p>
                )}
              </div>

              <div className={` ${paraphrased==="" ? "hidden" : "flex"} items-center justify-end bg-[#1A1A1E] p-3 rounded-md`} >
                <button disabled={isExceeded || loading} onClick={getResult} className="cursor-pointer flex items-center gap-1 group">
                  <RotateCcw  width={16} className="text-[#928FC5] group-hover:text-[#928FC5]/50"/>
                  <p className="text-[#928FC5] group-hover:text-[#928FC5]/50">Regenerate</p>
                </button>
              </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default ParaphrasePage