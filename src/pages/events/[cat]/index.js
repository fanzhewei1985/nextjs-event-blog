import Image from "next/image";
import Link from 'next/link'
const EventsCatPage=({data,pageName})=>{

    return(

        <div>
            <h1>Event in {`${pageName.charAt(0).toUpperCase()}${pageName.slice(1)}` }</h1>
            <div>
                {data.map(ev=><Link key={ev.id}  href={`/events/${ev.city}/${ev.id}`}>
<Image src={ev.image} width={300} height={200} alt={ev.title}/>
                    <h2>{ev.title}</h2>
                         <p>{ev.description}</p>
                </Link>)}
            </div>
            <a ></a>

        </div>
    )
}

export default EventsCatPage

export async function getStaticPaths(){
    const {events_categories}=await import('/data/data.json')
    const allPaths=events_categories.map(ev=> (
            {params:{
                    cat:ev.id.toString()
                }}

    ))
    console.log(11111,allPaths)
    return{
        paths:allPaths,
        fallback:false,
    }

}

export async function getStaticProps({params}){
    console.log(222222,params)
    const id=params.cat
    const {allEvents}=await import('/data/data.json')
    const data=allEvents.filter(ev=>ev.city===id)
    console.log(33333,data)
    return{
        props:{data,pageName:id}
    }
}