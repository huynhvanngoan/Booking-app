import { useSearchParams } from 'next/navigation'
import React, { useState } from 'react'

const Checkout = () => {

    const [clientSecret, setClientSecret] = useState("")
    const searchParams = useSearchParams()
  return (
    <div>
        Checkout
    </div>
  )
}

export default Checkout
