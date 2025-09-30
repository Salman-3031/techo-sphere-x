import team1 from '../../assets/images/AboutTeam/Team1.avif'
import team2 from '../../assets/images/AboutTeam/Team2.avif'

const TeamData = [
    {
    image: team1,
    name: 'AttaUllah',
    role: 'Founder & CEO',
},
    {
    image: team2,
    name: 'John',
    role: 'Designer',
},
    {
    image: team2,
    name: 'John',
    role: 'Designer',
},
    {
    image: team2,
    name: 'John',
    role: 'Designer',
},
    {
    image: team1,
    name: 'John',
    role: 'Designer',
},
    {
    image: team2,
    name: 'John',
    role: 'Designer',
},
]

const AboutTeam = () => {
  return (
    <div>
        <div className="container bg-bglight dark:bg-bgdark grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-10 pb-10">
            
            {
                TeamData.map((data,index)=>(
                    <div key={index} className='group relative rounded-sm  h-80 overflow-hidden'>
                        <img className='h-full w-full object-cover group-hover:blur-sm transition-all' src={data.image} alt="teamImage" />

                        <div className="info-data bg-bgdark dark:bg-bglight p-3 absolute bottom-0 right-0 w-full translate-y-full group-hover:translate-y-0 transition-all duration-[0.4s]">
                            <h3 className='font-medium text-lg dark:text-black text-white '>{data.name}</h3>
                            <p className='dark:text-darkpara text-lightpara'>{data.role}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default AboutTeam