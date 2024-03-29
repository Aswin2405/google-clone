import { SearchIcon } from '@heroicons/react/outline'
import { MicrophoneIcon, XIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import Avatar from './Avatar'
import HeaderOptions from './HeaderOptions'
function Header() {
    const router =useRouter()
    const searchInputRef=useRef(null)
    const search=(e)=>{
        e.preventDefault()
        const term=searchInputRef.current.value
        if(!term) return;
        router.push(`/search/?term=${term}`)
      }
    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
            <Image src="https://www.freepnglogos.com/uploads/logo-website-png/logo-website-coopera-web-design-12.png"
             height={60} width={110} className="cursor-pointer" onClick={()=>router.push("/")}/>
             <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg items-center max-w-3xl">
                 <input type="text" ref={searchInputRef} className="flex-grow w-full focus:outline-none" defaultValue={router.query.term} />
                 <XIcon className="h-7 sm:mr-3 cursor-pointer text-gray-500 transition duration-100 transform hover:scale-125"
                 onClick={()=>(searchInputRef.current.value="")} />
                 <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300"/>
                 <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex"/>
                 <button hidden type="submit" onClick={search}>Search</button>
             </form>
             <Avatar className="ml-auto" url="https://instagram.fmaa2-3.fna.fbcdn.net/v/t51.2885-19/s320x320/169092469_176689497622799_4608389346536074359_n.jpg?tp=1&_nc_ht=instagram.fmaa2-3.fna.fbcdn.net&_nc_ohc=uezWoEGwpI0AX-KQj_J&edm=ABfd0MgAAAAA&ccb=7-4&oh=16f8800c2efb1724bfeb1f8ba25cb98f&oe=609EC7FB&_nc_sid=7bff83"/>
            </div>
           <HeaderOptions/>
        </header>
    )
}

export default Header
