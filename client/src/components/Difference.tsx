
const Difference = () => {
  return (
    <div className="py-10 flex flex-col items-center justify-center space-y-3 bg-black">
        <h1 className="font-bold text-xl md:text-3xl ">See the Difference</h1>
        <p className="max-w-2xl text-center">
            Don't settle for mediocre copy. See how our AI transform rough drafts into polished professional content
        </p>

        <div className="flex w-full flex-col lg:flex-row">
            <div className="card bg-base-300 rounded-box grid h-32 grow place-items-center">content</div>
            <div className="divider lg:divider-horizontal">To</div>
            <div className="card bg-base-300 rounded-box grid h-32 grow place-items-center">content</div>
        </div>


    </div>
  )
}

export default Difference