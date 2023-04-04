import Image from "next/image";
import Link from "next/link";

const EventsPage=({data})=>{

    return(
        <div>
        <h1>Event Page</h1>
    <div>
        {data.map(ev=>(
            <Link key={ev.id} href={`/events/${ev.id}`}>
                <Image src={ev.image} width={300} height={200} alt={ev.title} />
                <h2>{ev.title}</h2>
            </Link>
        ))}
    </div>
        </div>
    )
}

export default EventsPage

export async function getStaticProps(){
    const {events_categories}=await import('/data/data.json')
    console.log(events_categories)
    return{
        props:{
            data:events_categories
        }
    }
}