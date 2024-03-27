import { DetailedIntinearyType } from '@/types/trip'
import React from 'react'

const Itinenary = ({ data } : { data: DetailedIntinearyType[] }) => {
  return (
    <div className="flex flex-col gap-10 items-center justify-center mt-10 relative">
    {data.map((dt, index) => {
      return (
        <div
          className="grid grid-cols-3 items-center justify-center z-30"
          key={dt.title}
        >
          <div className=" flex items-center justify-center z-20">
            <div className="h-[180px] w-[180px] bg-white flex items-center justify-center rounded-full border-3 border-dotted border-blue-500 z-20">
              <div className="h-[150px] w-[150px] bg-blue-500 rounded-full items-center justify-center flex z-20">
                <h1 className="text-white font-medium text-2xl">
                  Day {index + 1}
                </h1>
              </div>
            </div>
          </div>
        })
      }
    </div>
  )
}

export default Itinenary
