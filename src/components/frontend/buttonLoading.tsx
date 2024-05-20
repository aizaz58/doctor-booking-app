import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"

export function ButtonLoading({title,isLoading}:{title:string, isLoading:boolean,}) {
  return (
    <Button className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' >
        {isLoading &&
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
    }
      {title}
    </Button>
  )
}
