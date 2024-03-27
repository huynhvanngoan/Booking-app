import { DetailedIntinearyType } from '@/types/trip'
import React from 'react'

const Itinenary = ({ data } : { data: DetailedIntinearyType }) => {
  return (
    <div className='flex flex-col gap-10 items-center justify-center mt-10 relative'>
      {
        data.map((dt, index) => {
          return <div key={dt.}
        })
      }
    </div>
  )
}

export default Itinenary
