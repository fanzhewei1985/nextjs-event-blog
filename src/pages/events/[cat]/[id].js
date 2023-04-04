import React,{useRef,useState} from 'react'
import Image from "next/image";
import {useRouter} from "next/router";

const EventPage=({data})=>{
console.log(data)
    const inputEmail=useRef()
    const router=useRouter()
    const [message, setMessage]=useState('')
const onSubmit=async (e)=>{
    e.preventDefault()
const emailValue=inputEmail.current.value
    const eventId=router?.query.id
    console.log(eventId)
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(!emailValue.match(validRegex)){
        setMessage(('Please introduce a correct email address'))
    }
try{
const response=await fetch('/api/email-registration',{
method: 'POST',
    headers:{
    'Content-Type':'application/json'
    },
    body: JSON.stringify({
        eventId:eventId,
        email:emailValue
    })
    })
    if(!response.ok){throw new Error(`Error:${response.status}`)}
    const data= await response.json()
    setMessage(data.message)
console.log('POST1111111111111111111111111111',data)
    inputEmail.current.value=''
}
    catch(e){
console.log('ERROR',e)
    }

}
    return(
        <div className='evt_single'>
                <h1>{data.title}</h1>
            <Image src={data.image} width={1000} height={500} alt={data.title}/>
            <p>{data.description}</p>
            <form onSubmit={onSubmit} className='email_regis'>
            <label>Get Registered Now</label>
            <input ref={inputEmail} type='email' id='email' placeholder='please input your email'/>
            <button type='submit'>Submit</button>
            </form>
            <p>{message}</p>
        </div>
    )
}

export default EventPage

export async function getStaticPaths(){
    const data=await import('/data/data.json')
    const {allEvents}=data
    const allPaths=allEvents.map(path=> (
        {params:{
            cat:path.city,
                id:path.id.toString()
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
    const id=params.id
    const {allEvents}=await import('/data/data.json')
    const data=allEvents.find(ev=>ev.id===id)
    console.log(33333,data)
    return{
        props:{data}
    }
}