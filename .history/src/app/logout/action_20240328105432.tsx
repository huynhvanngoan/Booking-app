import React, { useEffect } from 'react'

const Actions = ({ deleteCookie } : { deleteCookie: () => Promise<void>}) => {
    useEffect(() => {
        deleteCookie
    },[])

  return null;
}

export default Actions
