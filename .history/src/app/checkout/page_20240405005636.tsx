import { useSearchParams } from 'next/navigation'
import React, { useState } from 'react'

const Checkout = () => {

    const [clientSecret, setClientSecret] = useState("")
    const searchParams = useSearchParams();
    const client_secret = searchParams.get("client_secret")
  return (
    <div>
        Checkout
    </div>
  )
}

export default Checkout
