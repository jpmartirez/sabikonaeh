import { Clipboard, Copy, RotateCcw, Sparkles, Trash } from "lucide-react";
import { useState } from "react"
import toast from "react-hot-toast";
import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import TrueFocus from "../components/animation/TrueFocus";

const SummarizePage = () => {

  axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL;

  const [style, setStyle] = useState("extractive");
  const [length, setLength] = useState("")

  const [original, setOriginal] = useState("");
  const [summarized, setsummarized] = useState<string>("");
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

    if(count > 500) {
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
    navigator.clipboard.writeText(summarized)
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


  const getResult = async ()=>{

      if (length==="") return toast.error("Choose summary length")
      
      setsummarized("");
      isLoading(true);

      const prompt = `Summarize the following text with a ${length.toLowerCase()} length
        and ${style} format style.
        Do not change the meaning of the text.
        Original text: "${original}"
        `;

      const {data} = await axios.post('/api/openai', {prompt});
      setsummarized(data.result);

      isLoading(false);

  }

  return (
    <div className="flex flex-col min-h-screen bg-[#121022] p-5 md:p-10">
      {/* PARAPHRASE */}
      <div className="  w-full flex-1 flex flex-col gap-4">
        <div className="max-w-354 mx-auto w-full space-y-4 mb-4">
          <div className="text-lg sm:text-xl lg:text-3xl font-semibold flex justify-start">
            <TrueFocus 
              sentence="AI TEXT SUMMARIZER"
              manualMode={false}
              blurAmount={5}
              borderColor="blue"
              animationDuration={0.5}
              pauseBetweenAnimations={0.8}
              />
          </div>

          <div className="text-gray-400">
            Condense long articles and documents into concise summaries in seconds using advanced AI.
          </div>
        </div>

        {/* PARAPHRASE CONFIG */}
        <div className="flex flex-wrap items-center justify-center  md:justify-between w-full max-w-354 mx-auto gap-5 sm:gap-7 md:gap-10 lg:gap-20 p-5 bg-[#1A1A1E] border border-gray-500/70 rounded-xl ">
          <div className=" flex flex-col items-center flex-wrap gap-2">
            <p className="font-semibold text-gray-400">SUMMARY LENGTH</p>
            <form className="filter flex flex-wrap items-center justify-center" >
              <input className="btn btn-square bg-primary" type="reset" value="×" onClick={()=>setLength("")}/>
              <input className="btn bg-primary" type="radio" name="frameworks" aria-label="Short" onChange={()=>setLength("Short")}/>
              <input className="btn bg-primary" type="radio" name="frameworks" aria-label="Medium" onChange={()=>setLength("Medium")}/>
              <input className="btn bg-primary"  type="radio" name="frameworks" aria-label="Long" onChange={()=>setLength("Long")}/>
            </form>
          </div>
          
          <div className="flex-1 flex flex-col gap-2">
              <div className="flex items-center">
                <p className="text-sm md:text-lg font-semibold text-gray-400">STYLE</p>
              </div>

              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-1">
                  <input type="radio" value="extractive" name="radio-4" className="radio radio-primary" defaultChecked onChange={(e)=>setStyle(e.target.value)}/>
                  <p>Extractive</p>
                </div>
                <div className="flex items-center gap-1">
                  <input type="radio" value="abstractive" name="radio-4" className="radio radio-primary" onChange={(e)=>setStyle(e.target.value)}/>
                  <p>Abstractive</p>
                </div>
              </div>
          </div>

          <div className="">
            <button disabled={isExceeded || empty || loading} onClick={getResult} className="btn btn-primary flex gap-2"><Sparkles width={15}/> SUMMARIZE</button>
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

              <textarea  onChange={(e) => handleText(e.target.value)} value={original} placeholder="Paste your article, essay, or document here to begin..." className="textarea textarea-md w-full text-lg h-60"></textarea>

              <div className="flex items-center justify-between bg-[#1A1A1E] p-3 rounded-md">
                <p className="text-xs text-[#928FC5]">{words} / 500 Words</p>
                <div className="cursor-pointer hover:scale-105">
                  <Trash width={16} className="text-[#928FC5]" onClick={() => {handleText(""); toast.success("Deleted")}}/>
                </div>
              </div>
          </div>

          {/* RIGHT AREA */}
          <div className="bg-gray-700 max-w-2xl w-full  flex flex-col rounded-xl border border-gray-600">
              <div className="flex justify-between bg-[#1A1A1E] p-3 rounded-md">
                <div className="flex flex-wrap gap-2">
                  <p className="text-sm font-semibold text-[#928FC5]">SUMMARY OUTPUT</p>
                  <div className="badge badge-soft badge-info">AI Generated</div>
                </div>
                <div>
                  <button onClick={copyText} className="text-sm font-semibold flex gap-1 items-center text-blue-800 cursor-pointer hover:text-blue-900"><Copy /></button>
                </div>
              </div>

              <div className={`${summarized=="" ? "h-72" : "h-auto"} bg-[#1a3b61] overflow-hidden overflow-y-scroll`}>
                {loading? (
                  <div className="flex items-center justify-center h-full">
                    <span className="loading loading-spinner text-primary"></span>
                  </div>
                ): (
                  <p className="p-3 text-lg"><ReactMarkdown>{summarized}</ReactMarkdown></p>
                )}
              </div>

              <div className={` ${summarized==="" ? "hidden" : "flex"} items-center justify-end bg-[#1A1A1E] p-3 rounded-md`} >
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

export default SummarizePage