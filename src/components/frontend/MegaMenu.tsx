"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


const megaMenuItems=[
    {
        title:'Top Booked',
        services:[
            {
                title:'TeleHealth',
                slug:'tele-health',
                description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa est officia amet cumque perferendis cupiditate esse reiciendis, asperiores optio sint animi corrupti error quibusdam quo alias excepturi sit quisquam obcaecati!"
            },
           
            {
                title:'Video prescription refill',
                slug:'tele-health',
                description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa est officia amet cumque perferendis cupiditate esse reiciendis, asperiores optio sint animi corrupti error quibusdam quo alias excepturi sit quisquam obcaecati!"
            },
           
            {
                title:'In-Person Visit',
                slug:'tele-health',
                description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa est officia amet cumque perferendis cupiditate esse reiciendis, asperiores optio sint animi corrupti error quibusdam quo alias excepturi sit quisquam obcaecati!"
            },
           
            {
                title:'UTI consult',
                slug:'tele-health',
                description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa est officia amet cumque perferendis cupiditate esse reiciendis, asperiores optio sint animi corrupti error quibusdam quo alias excepturi sit quisquam obcaecati!"
            },
           
        ]
    },
    {
        title:'Doctors',
        services:[
            {
                title:'TeleHealth',
                slug:'tele-health',
                description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa est officia amet cumque perferendis cupiditate esse reiciendis, asperiores optio sint animi corrupti error quibusdam quo alias excepturi sit quisquam obcaecati!"
            },
           
            {
                title:'Video prescription refill',
                slug:'tele-health',
                description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa est officia amet cumque perferendis cupiditate esse reiciendis, asperiores optio sint animi corrupti error quibusdam quo alias excepturi sit quisquam obcaecati!"
            },
           
            {
                title:'In-Person Visit',
                slug:'tele-health',
                description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa est officia amet cumque perferendis cupiditate esse reiciendis, asperiores optio sint animi corrupti error quibusdam quo alias excepturi sit quisquam obcaecati!"
            },
           
            {
                title:'UTI consult',
                slug:'tele-health',
                description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa est officia amet cumque perferendis cupiditate esse reiciendis, asperiores optio sint animi corrupti error quibusdam quo alias excepturi sit quisquam obcaecati!"
            },
           
        ]
    },
    {
        title:'Specialists',
        services:[
            {
                title:'TeleHealth',
                slug:'tele-health',
                description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa est officia amet cumque perferendis cupiditate esse reiciendis, asperiores optio sint animi corrupti error quibusdam quo alias excepturi sit quisquam obcaecati!"
            },
           
            {
                title:'Video prescription refill',
                slug:'tele-health',
                description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa est officia amet cumque perferendis cupiditate esse reiciendis, asperiores optio sint animi corrupti error quibusdam quo alias excepturi sit quisquam obcaecati!"
            },
           
            {
                title:'In-Person Visit',
                slug:'tele-health',
                description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa est officia amet cumque perferendis cupiditate esse reiciendis, asperiores optio sint animi corrupti error quibusdam quo alias excepturi sit quisquam obcaecati!"
            },
           
            {
                title:'UTI consult',
                slug:'tele-health',
                description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa est officia amet cumque perferendis cupiditate esse reiciendis, asperiores optio sint animi corrupti error quibusdam quo alias excepturi sit quisquam obcaecati!"
            },
           
        ]
    },
    {
        title:'Symtoms',
        services:[
            {
                title:'TeleHealth',
                slug:'tele-health',
                description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa est officia amet cumque perferendis cupiditate esse reiciendis, asperiores optio sint animi corrupti error quibusdam quo alias excepturi sit quisquam obcaecati!"
            },
           
            {
                title:'Video prescription refill',
                slug:'tele-health',
                description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa est officia amet cumque perferendis cupiditate esse reiciendis, asperiores optio sint animi corrupti error quibusdam quo alias excepturi sit quisquam obcaecati!"
            },
           
            {
                title:'In-Person Visit',
                slug:'tele-health',
                description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa est officia amet cumque perferendis cupiditate esse reiciendis, asperiores optio sint animi corrupti error quibusdam quo alias excepturi sit quisquam obcaecati!"
            },
           
            {
                title:'UTI consult',
                slug:'tele-health',
                description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa est officia amet cumque perferendis cupiditate esse reiciendis, asperiores optio sint animi corrupti error quibusdam quo alias excepturi sit quisquam obcaecati!"
            },
           
        ]
    }
]
export function MegaMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList  className="space-x-4">
        {megaMenuItems.map((item,i)=>{
            return(
                <NavigationMenuItem key={i}>
                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {item.services.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={`/services/${component.slug}`}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            )
        })}
      
        
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
