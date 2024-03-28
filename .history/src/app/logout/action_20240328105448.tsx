import { redirect } from 'next/navigation';
import React, { useEffect } from 'react'

const Actions = ({ deleteCookie } : { deleteCookie: () => Promise<void>}) => {
    useEffect(() => {
        deleteCookie();
        redirect("/")
    },[])

  return null;
}

export default Actions
