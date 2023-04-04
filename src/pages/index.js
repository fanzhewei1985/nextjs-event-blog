import Head from 'next/head'
import {Inter} from 'next/font/google'
import {HomePage} from "@/components/home/home-page";

const inter = Inter({subsets: ['latin']})

export default function Home({data}) {
    return (
        <>
            <Head>
                <title>Events App</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <HomePage data={data}/>
        </>
    )
}
// fetch函数必须单独写在外面，不可以写在component 里面，next js会先run serverside code firstly, then run above codings.
// only run in server side,所以放一些private information也没关系。

export async function getServerSideProps() {
    const {events_categories} = await import('/data/data.json')
    console.log(events_categories)
    return {
        props: {
            data: events_categories,
        }
    }
}