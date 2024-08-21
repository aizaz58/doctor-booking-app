import {  Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ButtonWithIcon({title,icon,link,className}:{title:string, icon?:any,link?:string,className:string}) {
    const Icon=icon
  return (
    <>
    {link ?(
    <Button asChild className={className}>
       <Link href={link} className="flex items-center text-white">
        {icon &&<Icon className='mr-2 w-4 h-4'/>}
    {title}

       </Link>
  </Button>    
    ):(
<Button className={className}>
{icon &&<Icon className='mr-2 w-4 h-4'/>}
       {title}
     </Button>
    )}
    
    </>
  )
}
