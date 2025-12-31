import { Globe, HeartHandshake, Layers2, Rotate3d, Zap } from "lucide-react"

const Teams = () => {
    const teams = [
        {
            icon: <HeartHandshake />, 
            name: 'ACME'
        },
        {
            icon: <Layers2 />, 
            name: 'STACK'
        },
        {
            icon: <Zap />, 
            name: 'VOLT'
        },
        {
            icon: <Rotate3d />, 
            name: 'ORBIT'
        },
        {
            icon: <Globe />, 
            name: 'GLOBE'
        }

    ]
  return (
    <div className="p-7 w-full mx-auto bg-black border-t border-b border-gray-700">
        <div className="text-center mb-5"> 
            <p className="font-bold text-md md:text-xl">TRUSTED INNOVATIVE TEAMS AT</p>
        </div>
        <div className="flex items-center gap-10 flex-wrap justify-center">
            {teams.map(team=>(
                <div key={team.name} className="flex items-center gap-2">
                    <div>{team.icon}</div>
                    <p className="text-2xl font-semibold">{team.name}</p>
                </div>
            ))}
        </div>
    </div>
    
  )
}

export default Teams