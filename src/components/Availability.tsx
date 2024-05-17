"use client"
import React, { useState } from 'react'
import { Calendar } from "@/components/ui/calendar"
import { Button } from './ui/button'
export default function Availability() {
    const [bookDate, setBookDate] = useState<Date | undefined>(new Date())
    const formattedDate=`${bookDate?.toString().split(" ").slice(0,3).join(" ") } - GMT ${bookDate?.getTimezoneOffset()}`
    const timeStamp=[
        {time:"8:30",
            period:"am"
        },
        {time:"9:30",
            period:"am"
        },
        {time:"10:30",
            period:"am"
        },
        {time:"11:30",
            period:"am"
        },
        {time:"5:30",
            period:"pm"
        }
    ]
  return (
    <div className='mb-[200px]'>

        <div className="grid grid-cols-2 gap-4 lg:gap-0">
            <div className="sm:col-span-1 col-span-full">
            <Calendar
      mode="single"
      selected={bookDate}
      onSelect={setBookDate}
      className="border rounded-md"
    />
            </div>
            <div className="sm:col-span-1 col-span-full">
                <div className="px-4">
                   {bookDate && <h2 className='pb-4 text-center font-semibold py-3 px-4 border border-blue-500 rounded-md text-blue-700'>{formattedDate}</h2>}
                   <div className="py-3 grid grid-cols-3 gap-1">
    {timeStamp.slice(0,5).map((item,i)=>{
        return(
            <Button key={i} className=' col-span-full sm:col-span-1 bg-blue-600 text-xs md:text-sm text-white   py-2 border border-gray-200 rounded-md hover:bg-blue-800'>{item.time}{item.period}</Button>
        )
    })}
    <Button className='col-span-full sm:col-span-1  text-white bg-blue-700 text-xs truncate md:text-sm py-2 border border-gray-200 rounded-md hover:bg-blue-800'>More Time..</Button>
</div>

                </div>

            </div>
        </div>
    </div>
  )
}
