import { useRouter } from 'next/navigation'
import React from 'react'

const Trip = ({
    params: {tripId}
}  : {
        params: {tripId: string}
    }) => {
        const router = useRouter()
  return (
    <div>
      Trip
    </div>
  )
}

export default Trip
