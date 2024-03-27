import { DetailedIntinearyType } from '@/types/trip'
import React from 'react'

const Itinenary = ({ data } : { data: DetailedIntinearyType[] }) => {
  return (
    <div className='flex flex-col gap-10 items-center justify-center mt-10 relative'>
      {
        data.map((dt, index) => {
          return <div key={dt.title} className='grid grid-cols-3 items-center justify-center z-30'>
            <div className="flex items-center justify-center z-20">
              .h-[180px]
            </div>
          </div>
        })
      }
    </div>
  )
}

export default Itinenary
