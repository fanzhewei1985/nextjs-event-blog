import '@/styles/globals.css'
import MainLayout from "@/components/layout/main-layout";
import '../styles/general.sass'
export default function App({ Component, pageProps }) {
  return (
      <>
      <MainLayout>
     <main> <Component {...pageProps} /></main>
      </MainLayout>
      </>
        )
}
