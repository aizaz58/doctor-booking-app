"use client"
import { Tabs } from "flowbite-react";
import { Activity, Microscope, Stethoscope, Syringe, X } from "lucide-react";
import ServiceList from "./services/ServiceList";
import LinkCards from "./doctors/LinkCards";

export function TabbedItems() {
  const services=[
    {title:"Telehealth",
    image:"/abc.jpg",
    slug:"telehealth"
  },
    {title:"Video Prescription refill",
    image:"/abc.jpg",
    slug:"telehealth"
  },
    {title:"Utin consult",
    image:"/abc.jpg",
    slug:"telehealth"
  },
    {title:"Mental health",
    image:"/abc.jpg",
    slug:"telehealth"
  },
    {title:"ED consult",
    image:"/abc.jpg",
    slug:"telehealth"
  },
    {title:"Urgent care",
    image:"/abc.jpg",
    slug:"telehealth"
  },
      
]
const tabsData=[
  {title:"Popular services",
  component:<ServiceList services={services}/>,
  icon:Stethoscope,
    content:[]
  },
  {title:"Doctors",
  component:<LinkCards/>,
  icon:Microscope,
    content:[]
  },
  {title:"Specialists",
  component:<LinkCards className="bg-blue-900"/>,
  icon:Activity,
    content:[]
  },
  {title:"Symptoms",
  component:<LinkCards className="bg-purple-950"/>,
  icon:Syringe,
    content:[]
  },
]

  return (
    <Tabs aria-label="Tabs with underline"  style="underline">
      {tabsData.map((tab,i)=>{
        return(
<Tabs.Item active title={tab.title} icon={tab.icon}>
      {tab.component}
      </Tabs.Item>
  
        )
      })}
      
    </Tabs>
  );
}
