"use client"
import { apiClient } from '@/lib';
import { useAppStore } from '@/store/store';
import { USER_API_ROUTES } from '@/utils';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const AppProtector = () => {
    const router = useRouter();
    const pathName = usePathname();
    const {setUserInfo, userInfo} = useAppStore();
    useEffect(() => {
        if(!userInfo) {
            const getUserInfo = async () => {
                const response = await apiClient.get(USER_API_ROUTES.ME);
                if(response.data.userInfo) {
                    setUserInfo(response.data.userInfo)
                }
            }
            getUserInfo()
        }
    }, [setUserInfo, userInfo])
  return null;
}

export default AppProtector
