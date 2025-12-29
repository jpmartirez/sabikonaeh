import Left from "./difference/Left"
import Right from "./difference/Right"

const Difference = () => {
  return (
    <div className="py-10 flex flex-col items-center justify-center space-y-3 bg-black">
        <h1 className="font-bold text-xl md:text-3xl ">See the Difference</h1>
        <p className="max-w-2xl text-center text-gray-400">
            Don't settle for mediocre copy. See how our AI transform rough drafts into polished professional content
        </p>

        <div className="flex w-full flex-col lg:flex-row px-5">
            <div className="card bg-[#121022] rounded-box grid grow place-items-center py-7"><Left/></div>
            <div className="divider lg:divider-horizontal">To</div>
            <div className="card bg-[#121022] rounded-box grid grow place-items-center py-7"><Right/></div>
        </div>
    </div>
  )
}

export default Difference