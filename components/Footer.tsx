import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const links = [
    {
        title :"home",
        href:"/"

    },
    {
        title :"about us",
        href:"/about"

    },
    {
        title :"services",
        href:"/services"

    },
    {
        title :"contact us",
        href:"/contact"

    },
]

function Footer() {
  return (
    <footer className="bg-slate-200 text-gray-800 py-8">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="">
        <h2 className="text-2xl font-semibold mb-4">Company Name</h2>
        <p className="mb-4">123 Main Street</p>
        <p className="mb-4">City, State ZIP</p>
        <p className="mb-4">Phone: (123) 456-7890</p>
        <p>Email: info@example.com</p>
      </div>
  
      <div>
        <h2 className="text-2xl font-semibold mb-4">Useful Links</h2>
        <ul className='flex flex-col'>
         {links.map((link)=> (
            <Link key={link.title} href={link.href}>{link.title}</Link>
         ))}
        </ul>
      </div>
  
      <div className="relative text-center h-11 flex">
        <Image src="/img/logo.png" width={300} height={300}  alt="Company Logo" className="mx-auto absolute mb-4 w-24 h-24" />
      <h3 className=' font-semibold underline tracking-widest'>don&apos;t hesitate to call us at  </h3>
      </div>
    </div>
    <div className='bg-slate-100 h-46 text-center'>

        <p className='text-lg'>&copy; 2023 Company Name</p>
    </div>
  </footer>
  )
}

export default Footer