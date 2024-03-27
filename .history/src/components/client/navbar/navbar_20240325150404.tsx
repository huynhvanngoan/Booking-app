import React from 'react'
import { Navbar as NextNavbar } from '@nextui-org/react'
import { Architects_Daughter } from 'next/font/google'
import { useRouter } from 'next/navigation';
import { useAppStore } from '@/store/store';

const ArchitectsDaughter = Architects_Daughter({
    weight: "400",
    style: "normal",
    subsets: ["latin"],
});



const Navbar = () => {
    const router = useRouter()
    const { userInfo } = useAppStore()
    const routes
    return (
    <div>
      Navbar
    </div>
  )
}

export default Navbar
Navbar