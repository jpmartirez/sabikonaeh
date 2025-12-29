import { ArrowLeftRight, NotebookText } from "lucide-react"
import FeaturesCard from "./FeaturesCard"

const cards = [
  {
    color: "blue",
    icon: NotebookText,
    name: "Smart Summarizer",
    description: "Turn long articles into concise insights without losing key information. Perfect for research and quick reading"
  },
  {
    color: 'purple',
    icon: ArrowLeftRight,
    name: "Advanced Paraphraser",
    description: "Find the perfect words every time. Rephrase sentences to adjust tone, clarity, and uniqueness instantly."
  }
]

const Features = () => {
  return (
    <div className="p-14 flex flex-col space-y-4 items-center w-full ">
        <div><p className="text-blue-700 font-bold text-md md:text-xl">Features</p></div>
        <div>
            <p className="text-lg md:text-xl lg:text-3xl font-bold">Power Up Your Writing</p>
        </div>
        <div className="max-w-2xl">
            <p className="text-lg font-lg text-gray-400 text-center">
                Our suite of tools helps you refine your content in seconds, ensuring your message lands perfectly every time
            </p>
        </div>

        <div className="flex items-center justify-center flex-wrap gap-10">
          {cards.map(card => (
            <FeaturesCard icon={card.icon} name={card.name} description={card.description} color={card.color}/>
          ))}
        </div>
    </div>
  )
}

export default Features