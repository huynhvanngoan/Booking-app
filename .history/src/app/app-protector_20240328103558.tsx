import { useAppStore } from '@/store/store';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const AppProtector = () => {
    const router = useRouter();
    const pathName = usePathname();
    const {setUserInfo, userInfo} = useAppStore();
    useEffect(() => {
        if(!userInfo) {
            const getUserInfo = async () => {
                const respo
            }
            getUserInfo()
        }
    }, [userInfo])
  return (
    <div>
       App Protector
    </div>
  )
}

export default AppProtector
