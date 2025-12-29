import type { LucideIcon } from "lucide-react"

const colors = {
    blue: "bg-blue-600/60",
    purple: "bg-purple-600/60"
}

type Cardprops = {
    icon: LucideIcon,
    name: String,
    description: String,
    color: String,
}

const FeaturesCard = ({icon: Icon, name, description, color}: Cardprops) => {
  return (
    <div className="card card-dash bg-primary/10 max-w-96 w-full shadow-2xl cursor-pointer hover:scale-105 transition-all duration-300">
        <div className="card-body"> 
            <h2 className="card-title"><Icon width={40} height={40} className={`p-2 ${colors[color]} rounded-xl`}/></h2>
            <p className="font-bold text-2xl">{name}</p>
            <p>{description}</p>
            
        </div>
    </div>
  )
}

export default FeaturesCard