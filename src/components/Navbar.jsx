
'use client'
import { authClient } from '@/lib/auth-client'
import { Avatar } from '@heroui/react'
import Link from 'next/link'





const Links = <>
  <Link href={'/'}>Home</Link>
  <Link href={'add-ideas'}>Add Ideas</Link>
  <Link href={'all-ideas'}>All Ideas</Link>

</>
const authentication = <>
  <Link href={'/signin'}>SignIn</Link>
  <Link href={'signup'}>SignUp</Link>
  <Link href={'signout'}>SignOut</Link>

</>


export default function Navbar() {
   const { 
        data: session, 
        
  } = authClient.useSession() 
  console.log(session)
  const user = session?.user;

  const handleSignOut =async () => {
    await authClient.signOut();
  }


  return (
    <div className="max-lg:collapse bg-base-200 shadow-sm w-full rounded-md">
  <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
  <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
  <div className="collapse-title navbar">
    <div className="navbar-start">
      <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <button className="btn btn-ghost text-xl">daisyUI</button>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
            { Links}
            
      </ul>
        </div>
          <div className="navbar-end hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
       {
              user ? <>
                 <li ><Avatar className='rounded-full object-cover'>
        <Avatar.Image alt="John Doe" src={user?.image} />
        <Avatar.Fallback>JD</Avatar.Fallback>
      </Avatar></li>
                <li><button onClick={handleSignOut}>SignOut</button></li>
               
              </>
                : <>{authentication}</>
        }
      </ul>
        </div>
        
   
  </div>

  <div className="collapse-content lg:hidden z-1">
    <ul className="menu">
  {Links}
        </ul>
         <ul className="menu flex">
  {authentication}
    </ul>
      </div>
      
    </div>
    
  )
}
