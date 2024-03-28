import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const AppProtector = () => {
    const router = useRouter();
    const pathName = usePathname();
    const {sey}
    useEffect(() => {

    }, [userInfo])
  return (
    <div>
       App Protector
    </div>
  )
}

export default AppProtector
