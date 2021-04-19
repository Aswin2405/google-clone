import Head from 'next/head'
import Avatar from '../components/Avatar'
import { ViewGridIcon,MicrophoneIcon } from '@heroicons/react/solid'
import { SearchIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Footer from '../components/Footer'
import { useRef } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const router =useRouter()
  const searchInputRef=useRef(null)
  const search=(e)=>{
    e.preventDefault()
    const term=searchInputRef.current.value
    if(!term) return;
    router.push(`/search/?term=${term}`)
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Search Engine</title> 
        <link rel="icon" href="https://banner2.cleanpng.com/20180419/hde/kisspng-search-engine-optimization-web-search-engine-searc-b-5ad8b0d90f3260.7434457915241504890623.jpg" />
      </Head>
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer"/>
          <Avatar url="https://instagram.fmaa2-3.fna.fbcdn.net/v/t51.2885-19/s320x320/169092469_176689497622799_4608389346536074359_n.jpg?tp=1&_nc_ht=instagram.fmaa2-3.fna.fbcdn.net&_nc_ohc=uezWoEGwpI0AX-KQj_J&edm=ABfd0MgAAAAA&ccb=7-4&oh=16f8800c2efb1724bfeb1f8ba25cb98f&oe=609EC7FB&_nc_sid=7bff83"/>
        </div>
      </header>
      <form className="flex flex-col items-center flex-grow mt-44 w-4/5">
        <Image src="https://www.freepnglogos.com/uploads/logo-website-png/logo-website-coopera-web-design-12.png"  height={100} width={100}/>
      <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
        <SearchIcon className="h-5 mr-3 text-gray-500"/>
        <input ref={searchInputRef} className="flex-grow focus:outline-none"/>
        <MicrophoneIcon className="h-5"/>
      </div>
      <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
        <button onClick={search} className="btn">Search</button>
        <button onClick={search} className="btn">I'm feeling lucky</button>
      </div>
      </form>
      <Footer/>
    </div>
  )
}
