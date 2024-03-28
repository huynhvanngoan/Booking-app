import { usePathname } from 'next/navigation';
import React from 'react'

const AppProtector = () => {
    const router = useRouter();
    const pathName = usePathname
  return (
    <div>
       App Protector
    </div>
  )
}

export default AppProtector
