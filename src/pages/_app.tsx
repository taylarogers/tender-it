import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from './components/Header'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='flex flex-col h-screen bg-background-white justify-center'>
      <Header/>
      <Component {...pageProps} />
    </div>
  );
}
