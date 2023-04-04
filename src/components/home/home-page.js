import Link from 'next/link'
import styles from "@/styles/Home.module.css";
import Image from "next/image";


export const HomePage=({data})=>{

    return <main className={styles.main}>
        <div className='cardTotal'>
            {data.map(ev=> <Link className='card' key={ev.id} href={`/events/${ev.id}`} passHref>
                <Image src={ev.image} width={400} height={200} style={{objectFit:'cover'}} />
                <h2>{ev.title}</h2>
                <p>{ev.description}</p>
            </Link>)}
        </div>
    </main>
}